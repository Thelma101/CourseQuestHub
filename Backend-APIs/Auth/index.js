require('dotenv').config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UserModel = require("./model/user")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(`mongodb+srv://coursequesthub:${process.env.DB_KEY}@cluster0.lssixvh.mongodb.net/CourseQuestHub`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));

app.post("/CQHUserlogin", (req, res) => {
    const {email, password} = req.body;
    UserModel.findOne({email: email})
    .then(users => {
        if(users) {
            if(users.password === password) {
                res.json("Success")
            } else {
                res.json("Incorrect Password. Try Again.")
            }
        } else {
            res.json("This user does not exist.")
        }
    })
})


app.post("/CQHUser", (req, res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})


app.listen(3001, () => {
    console.log(" Hello CQH, server is running!")
})