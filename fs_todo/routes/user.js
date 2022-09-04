const express = require("express");

const router = express.Router();
const {
  createUser,
  userSignIn,
  uploadProfile,
} = require("../controllers/user");

const { isAuth } = require("../middlewares/auth");
const {
  validateUserSignUp,
  userVlidation,
  validateUserSignIn,
} = require("../middlewares/validation/user");

const {signin} = require("../controllers/user")

const { test } = require("../controllers/user");
const { product } = require("../controllers/user");

const multer = require("multer");

const storage = multer.diskStorage({});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb("Invalid image file!", false);
  }
};
const uploads = multer({ storage, fileFilter });

router.get("/test",test);
router.post("/create-user", validateUserSignUp, userVlidation, createUser);
router.post("/sign-in", validateUserSignIn, userVlidation, userSignIn);
router.post(
  "/upload-profile",
  isAuth,
  uploads.single("profile"),
  uploadProfile
);

module.exports = router;
