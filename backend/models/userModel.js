import mongoose from "mongoose";
import validator from "validator";

const Users = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name.."],
  },
  email: {
    type: String,
    required: [true, "Please provide your email.."],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email.."],
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  password: {
    type: String,
    required: [true, "Please provide your password.."],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password.."],
    validate: {
      // This only works on SAVE and CREATE!!!
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwards do not match..!",
    },
  },
});

Users.methods.correctPassword = async function (userPass, dbPass) {
  if (userPass === (await dbPass)) {
    return true;
  }
};

export default mongoose.model("User", Users);
