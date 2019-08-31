const mongoose = require('mongoose');
const Joi = require('joi');

module.exports.User = mongoose.model(
  'user',
  new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  })
);

module.exports.signUpSchema = Joi.object().keys({
  username: Joi.string()
    .required()
    .min(3),
  email: Joi.string()
    .required()
    .email({ minDomainAtoms: 2 }),
  password: Joi.string()
    .required()
    .min(7)
    .max(30)
    .regex(/[^\s]{7,30}$/)
});
