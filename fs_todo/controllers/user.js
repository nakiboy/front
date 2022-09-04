const jwt = require("jsonwebtoken");
const User = require("../models/user");
const sharp = require("sharp");
// const cloudinary = require("../helper/imageUpload");


exports.test = async (req, res) => {
  return (
    res.json({ message: "This register is already in use, try sign-in" }),
    console.log("test")
  );
};

exports.createUser = async (req, res) => {
  const { fullname, register, password } = req.body;
  const isNewUser = await User.isThisRegisterInUse(register);
  if (!isNewUser)
    return res.json({
      success: false,
      message: "This register is already in use, try sign-in",
    });
  const user = await User({
    fullname,
    register,
    password,
  });
  await user.save();
  res.json({ success: true, user });
};



exports.userSignIn = async (req, res) => {
  const { fullname, register, password } = req.body;

  console.log(fullname, register, password);
  const user = await User.findOne({ register });

  if (!user)
    return res.json({
      success: false,
      message: "user not found, with the given register!",
    });

  const isMatch = await user.comparePassword(password);
  if (!isMatch)
    return res.json({
      success: false,
      message: "fullname / register / password  does not match!",
    });

  // const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
  //   expiresIn: "1d",
  // });

  const userInfo = {
    fullname: user.fullname,
    register: user.register,
    avatar: user.avatar ? user.avatar : "",
  };

  res.json({ success: true, user: userInfo });
};








exports.uploadProfile = async (req, res) => {
  const { user } = req;
  if (!user)
    return res
      .status(401)
      .json({ success: false, message: "unauthorized access!" });

  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      public_id: `${user._id}_profile`,
      width: 500,
      height: 500,
      crop: "fill",
    });

    await User.findByIdAndUpdate(user._id, { avatar: result.url });
    res
      .status(201)
      .json({ success: true, message: "Your profile has updated!" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "server error, try after some time!",
    });
    console.log("Error while uploading profile image", error.message);
  }
};
