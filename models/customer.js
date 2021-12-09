const mongoose = require("mongoose");
const Joi = require("joi");

const Customer = mongoose.model(
    "Customer",
    new mongoose.Schema({
      name: {
        type: String,
        required: true,
      },
  
      isGold: {
        type: Boolean,
        requied: true,
      },
  
      phone: {
        type: String,
        minlength: 10,
        maxlength: 10,
      },
    })
  );

  function validateCustomer(customer) {
    const schema = Joi.object({
      name: Joi.string().min(3).required(),
      isGold: Joi.boolean(),
      phone: Joi.string().min(10).required()
  
    });
  
    const validation = schema.validate(customer);
    return validation;
  }

  exports.Customer = Customer;
  exports.validateCustomer = validateCustomer;