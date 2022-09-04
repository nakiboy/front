const mongoose = require("mongoose");
const bcrypt = require("bcrypt"); 

const productSchema = new mongoose.Schema({
    productName: {
      type: String,
      required: true,
    },
    productCode: {
      type: String,
      required: true,
    },
    productQuantity: {
      type: String,
      required: true,
    },
    productPrice: {
      type: String,
      required: true,
    },
    productDate: {
      type: String,
      required: true,
    },
    productRegister: {
      type: String,
      required: true,
    },
    productAccount: {
      type: String,
      required: true,
    },
    productOwner: {
      type: String,
      required: true,
    },
  });

  productSchema.statics.isThisProductNameInUse = async function (productName) {
    if (!productName) throw new Error("Invalid name");
    try {
      const product = await this.findOne({ productName });
      if (product) return false;
  
      return true;
    } catch (error) {
      console.log("error inside isThisProductNameInUse method", error.message);
      return false;
    }
  };

  productSchema.statics.isThisProductCodeInUse = async function (productCode) {
    if (!productCode) throw new Error("Invalid Code");
    try {
      const product = await this.findOne({ productCode });
      if (product) return false;
  
      return true;
    } catch (error) {
      console.log("error inside isThisProductCodeInUse method", error.message);
      return false;
    }
  };

  productSchema.statics.isThisproductQuantityInUse = async function (productQuantity) {
    if (!productQuantity) throw new Error("Invalid Quantity");
    try {
      const product = await this.findOne({ productQuantity });
      if (product) return false;
  
      return true;
    } catch (error) {
      console.log("error inside isThisProductQuantityInUse method", error.message);
      return false;
    }
  };

  productSchema.statics.isThisProductPriceInUse = async function (productPrice) {
    if (!productPrice) throw new Error("Invalid price");
    try {
      const product = await this.findOne({ productPrice });
      if (product) return false;
  
      return true;
    } catch (error) {
      console.log("error inside isThisProductPriceInUse method", error.message);
      return false;
    }
  };
  productSchema.statics.isThisProductDateInUse = async function (ProductDate) {
    if (!ProductDate) throw new Error("Invalid date");
    try {
      const product = await this.findOne({ ProductDate });
      if (product) return false;
  
      return true;
    } catch (error) {
      console.log("error inside isThisProductDateInUse method", error.message);
      return false;
    }
  };


  productSchema.statics.isThisProductRegisterInUse = async function (ProductRegister) {
    if (!ProductRegister) throw new Error("Invalid Register");
    try {
      const product = await this.findOne({ ProductRegister });
      if (product) return false;
  
      return true;
    } catch (error) {
      console.log("error inside isThisProductRegisterInUse method", error.message);
      return false;
    }
  };

  productSchema.statics.isThisProductAccountInUse = async function (ProductAccount) {
    if (!ProductAccount) throw new Error("Invalid Account");
    try {
      const product = await this.findOne({ ProductAccount });
      if (product) return false;
  
      return true;
    } catch (error) {
      console.log("error inside isThisProductAccountInUse method", error.message);
      return false;
    }
  };

  productSchema.statics.isThisProductOwnerInUse = async function (ProductOwner) {
    if (!ProductOwner) throw new Error("Invalid Owner");
    try {
      const product = await this.findOne({ ProductOwner });
      if (product) return false;
  
      return true;
    } catch (error) {
      console.log("error inside isThisProductOwnerInUse method", error.message);
      return false;
    }
  };

  module.exports = mongoose.model("product", productSchema);