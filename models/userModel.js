const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    playlists: {
      type: Array,
      required: false,
    },
    history:{
      type: Array,
      required:false,
    },
    isAdmin: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("user", userSchema);
