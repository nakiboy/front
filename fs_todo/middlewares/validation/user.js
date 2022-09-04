const { check, validationResult } = require("express-validator");

exports.validateUserSignUp = [
  check("fullname")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Name is required!")
    .isString()
    .withMessage("must be a valid name!")
    .isLength({ min: 3, max: 20 })
    .withMessage('Name must be within 3 to 20 characters!'),
    check("register")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Register is required!")
    .isString()
    .withMessage("must be a valid register!")
    .isLength({ min: 3, max: 20 })
    .withMessage('Register must be within 3 to 20 characters!'),
  check("password")
    .trim()
    .not()
    .isEmpty()
    .withMessage('Password is empty!')
    .isLength({ min: 8, max: 20 })
    .withMessage("Password must be 3 to 20 characters long!"),
  check("confirmPassword")
    .trim()
    .not()
    .isEmpty()
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Both password must be same!");
      }
      return true;
    }),
];

exports.userVlidation = (req, res, next) => {
  const result = validationResult(req).array();
  if (!result.length) return next();

  const error = result[0].msg;
  res.json({ success: false, message: error });
};

exports.validateUserSignIn = [
  check("fullname")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Fullname is required!"),
  check("register")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Register is required!"),
  check('password')
    .trim()
    .not()
    .isEmpty()
    .withMessage('fullname / register / password is required!'),
];

