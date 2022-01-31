require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('61c48c4cb0a9b70e1d81607a', { age: 23 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 23 })
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

const updateAgeandCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeandCount('61c48c4cb0a9b70e1d81607a', 29).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})