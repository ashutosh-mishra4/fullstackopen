// const mongoose = require("mongoose");

// if (process.argv.length < 3) {
//   console.log(
//     "Please provide the password as an argument: node mongo.js <password>"
//   );
//   process.exit(1);
// }

// const password = process.argv[2];

// const url = `mongodb+srv://ashutosh:${password}@cluster0.xh71o.mongodb.net/personApp?retryWrites=true&w=majority`;

// mongoose.connect(url);

// const personSchema = new mongoose.Schema({
//   name: String,
//   number: Number,
// });

// const Person = mongoose.model("Person", personSchema);

// if (process.argv[3] && process.argv[4]) {
//   const person = new Person({
//     name: process.argv[3],
//     number: process.argv[4],
//   });
//   person.save().then((result) => {
//     console.log(
//       `added ${process.argv[3]} number ${process.argv[4]} to phonebook`
//     );
//     mongoose.connection.close();
//   });
// } else {
//   Person.find({}).then((result) => {
//     console.log('phonebook:')
//     result.forEach((note) => {
//       console.log(`${note.name} ${note.number}`);
//     });
//     mongoose.connection.close();
//   });
// }
