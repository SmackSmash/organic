const mongoose = require('mongoose');
const { mongoURI } = require('../config/keys');

module.exports = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true
    });
    console.log('Connected to Organic DB');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
