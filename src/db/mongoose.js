const mongoose = require("mongoose")
require('dotenv').config()

// mongoose
//   .connect("mongodb://127.0.0.1:27017/async-now", {})
//   .then(() => {
//     console.log("Connected to database ")
//   })
//   .catch((err) => {
//     console.error(`Error connecting to the database. \n${err}`)
//   })

const password = process.env.MONGODB_Password

const url = `mongodb+srv://user1:${password}@cluster0.ld4pg.mongodb.net/async-now?retryWrites=true&w=majority&ssl=true`
mongoose
  .connect(url, {})
  .then(() => {
    console.log("Connected to database ")
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`)
  })