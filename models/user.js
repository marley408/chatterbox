const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
mongoose.promise = Promise

const userSchema = new Schema({

  email:{type: String, unique: true, required: true},
  password: { type: String, unique: false, required: false },
  contacts:[{
    type: Schema.Types.ObjectId,
    ref: "User"
  }],
  is_active:{type: Boolean, default: false}
});



module.exports = User;