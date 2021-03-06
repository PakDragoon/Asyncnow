const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
const router = new express.Router()
const multer = require('multer')
const sharp = require('sharp')
const sgMail = require("@sendgrid/mail")
const sendGridAPI = "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"

sgMail.setApiKey(sendGridAPI)

//Send mail

//Create User
router.post('/users', async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        company: req.body.company,
        password: req.body.password,
        role: req.body.role,
        code: req.body.code,
        status: req.body.status
    })
    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(200).send({user, token})
    } catch (error) {
        // console.log(req.body)
        res.status(400).send({ message: 'user created' })
    }
})

//Login User
router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({user, token})
    } catch (error) {
        res.status(404).send(error)
    }
})

//Get User Profile
router.get('/users/me', auth, async (req, res) => {
    try {
        res.status(200).send(req.user)
    } catch (error) {
        res.status(400).send(error)
    }    
})

//Get all Users by Admin
router.get('/users', async (req, res) => {
    try {
        const users = await User.find({})
        res.status(201).send(users)
    } catch (error) {
        res.status(400).send(error)
    }
})

//Update User
router.patch('/users/me', auth, async (req, res) =>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'company', 'role', 'status']
    const isValid = updates.every((update) => allowedUpdates.includes(update))
    if(!isValid){
        return res.status(400).send({error: 'Not allowed to update this'})
    }
    try {
        updates.forEach((update) => req.user[update] = req.body[update])
        await req.user.save()
        res.send(req.user)
    } catch (error) {
        res.status(400).send(error)
    }
})

//Update User By Admin
router.patch('/user/update/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['status']
    const isValid = updates.every((update) => allowedUpdates.includes(update))
    if(!isValid){
        return res.status(400).send({error: 'Not allowed to update this'})
    }
    try {
        const userUpdate = await User.findByIdAndUpdate(req.params.id)
        updates.forEach((update) => userUpdate[update] = req.body[update])
        await userUpdate.save()
        if(!userUpdate){
            return res.status(404).send()
        }
        res.status(201).send(userUpdate)
    } catch (error) {
        res.status(400).send(error)
    }
})

//Delete User By Admin
router.delete('/user/delete/:id', async (req, res) => {
    try {
        const id = req.params.id
        console.log(id)
        const deleteUser = await User.findByIdAndDelete(req.params.id)
        if (!deleteUser){
            return res.status(404).send()
        }
        res.status(200).send(deleteUser)
    } catch (error) {
        res.status(400).send(error)
    }
})

// //Delete User
// router.delete('/users/me', auth, async (req, res) => {
//     try {
//         await req.user.remove()
//         res.status(200).send(req.user)
//     } catch (error) {
//         res.status(400).send(error)
//     }
// })
// //Upload Profile picture
// const upload = multer({
//     limits: {
//         fileSize: 1048576
//     },
//     fileFilter(req, file, cb){
//         if(!file.originalname.match(/\.(jpg|jpeg|png|PNG|JPG|JPEG)$/)){
//             return cb(new Error('Please upload an image file(.jpg .png . jpeg'))
//         }
//         cb(undefined, true)
//     }
// })
// router.post('/users/me/avatar', auth, upload.single('avatar'), async (req, res) => {
//     const buffer = await sharp(req.file.buffer).resize({width:250,height:250}).png().toBuffer()
//     req.user.avatar = buffer
//     await req.user.save()
//     res.send()
// }, (error, req, res, next) => {
//     res.status(400).send({error: error.message})
// })
// //Delete Profile Picture
// router.delete('/users/me/avatar', auth, async (req, res) => {
//     try {
//         req.user.avatar = undefined
//         await req.user.save()
//         res.send()
//     } catch (error) {
//         res.status(400).send(error)
//     }
// })

// //Serving Image
// router.get('/users/:id/avatar', async (req, res) => {
//     try {
//         const user = await User.findById(req.params.id)
//         if(!user || !user.avatar){
//             throw new Error('')
//         }
//         res.set('Content-Type', 'image/png')
//         res.send(user.avatar)
//     } catch (error) {
//         res.status(404).send(error)        
//     }
// })

//Logout User
router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send(error)
    }
})

//Logout user from all sessions 
router.post('/users/logoutall', auth, async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router