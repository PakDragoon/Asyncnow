const express = require('express')
const fs = require('fs')
const util = require('util')
const unlinkFile = util.promisify(fs.unlink)
const Task = require('../models/task')
const auth = require('../middleware/auth')
const multer = require('multer')
const S3 = require('aws-sdk/clients/s3')
const router = new express.Router()
const { uploadFile, getFileStream } = require('../bucket/s3')

const bucketName = process.env.AWS_S3_BUCKET_NAME
const region = process.env.AWS_S3_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey
})

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
    destination: 'uploads/',
    filename: (req, file, cb) => {
      const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, (uniquePrefix + '-' + file.originalname).replace(/\s+/g, ''))
    }
  })
const upload = multer({ storage: storage, })

// router.post('/upload/video', auth, upload.single('video'), async (req, res) => {
//     const task = new Task({
//         description: req.body.description,
//         cta: req.body.cta,
//         owner: req.user._id,
//         link: req.file.filename.replace(/\s+/g, '')
//     })
//     try {
//         await task.save()
//         res.status(201).send(task)
//     } catch (error) {
//         res.status(400).send(error)
//     }
//     res.sendStatus(200)
// }, (error, req, res, next) => {
//     res.status(400).send({error: error.message})
// })

//s3 upload
router.post('/upload/video', auth, upload.single('video'), async (req, res) => {
    const file = req.file
    const result = await uploadFile(file)
    await unlinkFile(file.path)
    const task = new Task({
        description: req.body.description,
        cta: req.body.cta,
        owner: req.user._id,
        // link: req.file.filename.replace(/\s+/g, '')
        link: result.Key
    })
    res.send({imagePath: `/play/video${result.Key}`})
    await task.save()
}, (error, req, res, next) => {
    res.status(400).send({error: error.message})
})

router.get('/play/video/:key', (req, res) => {
    const key = req.params.key
    const readStream = getFileStream(key)
    readStream.pipe(res)
})

router.delete("/delete/s3obj/:key", async (req, res) => {
    const key = req.params.key
    const params = {
        Key: key,
        Bucket: bucketName
    };
    s3.deleteObject(params, function(err, data) {
        if (err) console.log(err, err.stack); 
        else     console.log(data);       
    });
})

module.exports = router