const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const Task = require('./models/task') 
const User = require('./models/user') 
const multer = require('multer')

const app = express()
const port = process.env.PORT || 3000

//Result in JSON format
app.use(express.json())
//Routes
app.use(userRouter)
app.use(taskRouter)

//Check if server is running
app.listen(port, () => {
    console.log('Server is up running '+ port)
})

