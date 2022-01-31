const express = require('express')
const Task = require('../models/task')
const auth = require('../middleware/auth')
const router = new express.Router()

//Enter Task
router.post('/tasks', auth, async (req, res) => {
    const task = new Task({
        ...req.body,
        owner: req.user._id
    })
    try {
        await task.save()
        res.status(201).send(task)
    } catch (error) {
        res.status(400).send(error)
    }
})
//Get all tasks
//Get /tasks?completed=true/false&limit=10&skip=0&sortBy=createdAt:desc
router.get('/tasks', auth, async (req, res) => {
    const match = {}
    const sort = {}
    if(req.query.completed){
        match.completed = req.query.completed === 'true'
    }
    if(req.query.sortBy){
        const parts = req.query.sortBy.split(':')
        sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
    }
    try {
        await req.user.populate({
            path: 'tasks',
            match,
            options: {
                limit: parseInt(req.query.limit),
                skip: parseInt(req.query.skip),
                sort
            }
        })
        res.send(req.user.tasks)
    } catch (error) {
        res.status(404).send(error)
    }
})
//Get task by ID
router.get('/tasks/:id', auth, async (req, res) => {
    const _id = req.params.id
    try {
        const task = await Task.findOne({_id, owner: req.user._id})
        if(!task) {
            return res.status(404).send()
        }
        res.status(201).send(task)
    } catch (error) {
        res.status(500).send()
    }
})
//Update Task by ID
router.patch('/tasks/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValid = updates.every((update) => allowedUpdates.includes(update))
    if(!isValid){
        return res.status(404).send({error: 'No task found with this ID'})
    }
    try {
        const taskUpdate = await Task.findOne({_id: req.params.id, owner: req.user._id})
        if(!taskUpdate){
            return res.status(404).send()
        }
        updates.forEach((update) => taskUpdate[update] = req.body[update])
        await taskUpdate.save()
        res.status(201).send(taskUpdate)
    } catch (error) {
        res.status(400).send(error)
    }
})
//Delete Task by ID
router.delete('/tasks/:id', auth, async (req, res) => {
    try {
        const deleteTask = await Task.findOneAndDelete({_id: req.params.id, owner: req.user._id})
        if (!deleteTask){
            return res.status(404).send()
        }
        res.status(200).send(deleteTask)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router