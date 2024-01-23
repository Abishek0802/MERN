// //getting mongoose
// const mongoose = require("mongoose");

// // importing Users file
// const Users = require("./Users");

// // connecting mongoose
// main().catch((err) => console.log(err.message));

// async function main() {
//   await mongoose.connect("mongodb://127.0.0.1:27017/testdb");
//   const user = await Users.create({
//     //validation only work for User.create()  not for others
//     name: "Abishek",
//     age: 20,
//     email: "abishekDDDD4690@gmail.com",
//     hobbies: ["coding", "cooking"],
//     address: {
//       street: "K.K.Nagar",
//     },
//   });
//   Users.createdAt = 8;
//   console.log(user);
// }
