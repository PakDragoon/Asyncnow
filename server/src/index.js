const express = require("express")
require("./db/mongoose")
const userRouter = require("./routers/user")
const taskRouter = require("./routers/task")
const Task = require("./models/task")
const User = require("./models/user")
const multer = require("multer")
const bodyParser = require("body-parser")
const nodemailer = require("nodemailer")
const sendGridTransport = require("nodemailer-sendgrid-transport")
const { SENDGRID_API } = require("./config/keys")
const path = require('path');

const app = express()
const port = process.env.PORT || 3000

const transporter = nodemailer.createTransport(
  sendGridTransport({
    auth: {
      api_key: SENDGRID_API,
    },
  })
)
app.use(express.static(path.resolve(__dirname, '../client/build')));
//Result in JSON format
app.use(express.json())

//CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE")
  next()
})

//Routes
app.use(userRouter)
app.use(taskRouter)

app.post("/mail", (req, res) => {
  const { email } = req.body
  transporter
    .sendMail({
      to: email,
      from: "hassan748_7@hotmail.com",
      subject: "Asyncnow - Getting Started",
      html: `<p>You can register yourself by clicking on the given link below:</p><br><a href="http://localhost:3001/register">http://localhost:3001/register</a>`,
    })
    .then((resp) => {
      res.json({ resp })
    })
    .catch((err) => {
      console.log(err)
    })
})

//Check if server is running
app.listen(port, () => {
  console.log("Server is up running " + port)
})
