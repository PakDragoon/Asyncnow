require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('61c590b1118057dc9922cd2b').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

const deleteAndCount = async (id, completed) => {
    const task = await Task.findByIdAndDelete(id, {completed})
    const count = await Task.countDocuments({completed})
    return count
}  

deleteAndCount('61c470f70f6247f15a0177c0', false).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})