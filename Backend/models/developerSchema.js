const mongoose = require("mongoose");

//Creating Schema for my DB

const developerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
  },
  techStack: {
    type: String,
    required: true,
    minLength: 2,
  },
  currentCompany: {
    type: String,
    required: true,
    minLength: 4,
  },
  age: {
    type: Number,
    required: true,
    min: 1,
    max: 99,
  },
  experience: {
    type: Number,
    required: true,
    min: 0,
    max: 25,
  },
  education: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

//Creation of model
const Developer = new mongoose.model("Developer", developerSchema);

//Exporting of the model.
module.exports = Developer;
