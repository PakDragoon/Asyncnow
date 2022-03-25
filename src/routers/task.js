const express = require('express')
const Task = require('../models/task')
const auth = require('../middleware/auth')
const multer = require('multer')
const router = new express.Router()

//Enter Task
router.post('/create/tasks', auth, async (req, res) => {
    const task = new Task({
        description: req.body.description,
        cta: req.body.cta,
        // ...req.body,
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
router.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const task = await Task.findOne({_id})
        if(!task) {
            return res.status(404).send()
        }
        res.status(201).send(task)
    } catch (error) {
        res.status(500).send()
    }
})
//Get task by ID (others)
router.get('/others/tasks/:id', async (req, res) => {
    const _link = req.params.id
    try {
        const task = await Task.findOne({link: _link})
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
    const allowedUpdates = ['views', 'clicks']
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
//Update Task by ID (others)
router.patch('/others/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['views', 'clicks']
    const isValid = updates.every((update) => allowedUpdates.includes(update))
    if(!isValid){
        return res.status(404).send({error: 'No task found with this ID'})
    }
    try {
        const taskUpdate = await Task.findOne({_id: req.params.id})
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
router.delete('/delete/tasks/:id', auth, async (req, res) => {
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

//upload video
const storage = multer.diskStorage({
    destination: 'client/public/assets/videos/',
    filename: (req, file, cb) => {
      const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, (uniquePrefix + '-' + file.originalname).replace(/\s+/g, ''))
    }
  })
const upload = multer({ storage: storage, })

router.post('/upload/video', auth, upload.single('video'), async (req, res) => {
    const task = new Task({
        description: req.body.description,
        cta: req.body.cta,
        owner: req.user._id,
        link: req.file.filename.replace(/\s+/g, '')
    })
    try {
        await task.save()
        res.status(201).send(task)
    } catch (error) {
        res.status(400).send(error)
    }
    console.log(req.file)
    res.sendStatus(200)
}, (error, req, res, next) => {
    res.status(400).send({error: error.message})
})

module.exports = router