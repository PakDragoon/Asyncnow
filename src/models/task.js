const mongoose = require('mongoose')
const validator = require('validator')
const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: true
    },
    link: {
        type: String,
        required: true
    },
    cta: {
        type: String,
        trim: true
    },
    views: {
        type: Number,
        trim: true,
        default: 0
    },
    clicks: {
        type: Number,
        default: 0,
        trim: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
})

taskSchema.pre('save', async function (next) {
    next()
})

const Tasks = mongoose.model('Task', taskSchema)

module.exports = Tasks