const mongoose = require("mongoose");

//creating Another schema
const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
});

//creating a schema
const userschema = new mongoose.Schema({
  name: String,
  age: {
    // validation goes here
    type: Number,
    min: 5,
    max: 100,
    //validator
    // validate: {
    //   validator: (v) => v % 2 === 0,
    //   message: (props) => `${props.value} is not even number`,
    // },
  },
  email: {
    // validation goes here
    type: String,
    minLenght: 10,
    required: true,
    lowercase: true,
  },
  createdAT: {
    // validation goes here
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedAT: {
    // validation goes here
    type: Date,
    default: () => Date.now(),
  },
  bestFriend: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Users",
  },
  hobbies: [String],
  address: addressSchema,
});

//using some methods

userschema.methods.sayHai = function () {
  console.log(`hii my name is ${this.name}`);
};

userschema.statics.findByName = function (name) {
  return this.where({ name: new RegExp(name, "i") });
};

userschema.query.ByName = function (name) {
  return this.where({ name: new RegExp(name, "i") });
};

//  middleWare

userschema.pre("save", function (next) {
  this.updatedAT = new Date();
  next();
});
userschema.post("save", function (doc, next) {
  doc.sayHai();
  next();
});

//creating model
module.exports = mongoose.model("Users", userschema);
