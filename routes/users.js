const router = require('express').Router();
const Joi = require('joi');
const { User, signUpSchema } = require('../models/user');

// @route   POST /api/users
// @desc    Sign up user
// @access  Public
router.post('/', async (req, res) => {
  const result = Joi.validate(req.body, signUpSchema, { abortEarly: false });
  if (result.error) {
    return res.status(422).send({
      errors: result.error.details.map(error => error.message)
    });
  }
  res.send('Success!');
});

module.exports = router;
