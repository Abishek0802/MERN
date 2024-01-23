//getting mongoose
const mongoose = require("mongoose");

// importing Users file
const Users = require("./Users");

main().catch((err) => console.log(err.message));

async function main() {
  // connecting mongoose
  await mongoose.connect("mongodb://127.0.0.1:27017/testdb");
  const user = await Users.where("name")
    .equals("Abishek")
    .where("age")
    .gt(10)
    .limit(3)
    .populate("bestFriend");

  //   user[1].bestFriend = "65af92dffcfb7c38bb3aece7";
  //   await user[0].save();
  console.log(user);
}
