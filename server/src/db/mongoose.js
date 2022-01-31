const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {})





// const task = new Tasks({
//     description: '      Have breakfast     '
// })

// task.save().then(()=> {
//     console.log(task)
// }).catch((error)=>{
//     console.log('error!:',error)
// })

