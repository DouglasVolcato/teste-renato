const mongoose = require('mongoose');

const CharactersSchema = new mongoose.Schema({
  user: {
    // who is logged in // relating table in mongoose
    type: String, //mongoose.Schema.Types.ObjectId, // user id
   // ref: 'User', // references the user table
   // required: true,
  },
  name: {
     type: String,
  },
  imageUrl: {
    type: String,
    required: true,
  }
});

const Characters = mongoose.model('characters', CharactersSchema);

module.exports = Characters;
