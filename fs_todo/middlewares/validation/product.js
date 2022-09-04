const { check, validationResult } = require("express-validator");

exports.validateUserProduct = [
    check("productName")
    .trim()
    .not()
    .isEmpty()
    .withMessage("productName is required!"),

    check("productCode")
      .trim()
      .not()
      .isEmpty()
    .withMessage("productCode is required!"),
  
    check("productQuantity")
      .trim()
      .not()
      .isEmpty()
    .withMessage("productQuantity is required!"),
  
    check("productPrice")
      .trim()
      .not()
      .isEmpty()
    .withMessage("productPrice is required!"),
  
    check("productDate")
      .trim()
      .not()
      .isEmpty()
    .withMessage("productDate is required!"),
  
    check("productRegister")
      .trim()
      .not()
      .isEmpty()
    .withMessage("productRegister is required!"),
  
    check("productAccount")
      .trim()
      .not()
      .isEmpty()
    .withMessage("productAccount is required!"),
  
    check("productOwner")
      .trim()
      .not()
      .isEmpty()
     .withMessage("productOwner is required!"),
  ];
  
  exports.productVlidation = (req, res, next) => {
    const result = validationResult(req).array();
    if (!result.length) return next();
  
    const error = result[0].msg;
    res.json({ success: false, message: error });
  };