//getting mongoose
const mongoose = require("mongoose");

// importing Users file
const Users = require("./Users");

// connecting mongoose
main().catch((err) => console.log(err.message));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/testdb");
  //   const user = await Users.findOne({ name: "Abishek" });
  //   user.sayHai();
  //   const user = await Users.findByName("Abishek");
  const user = await Users.find().ByName("Abishek").limit(4);
  console.log(user);
  user.save();
  console.log(user);
}
