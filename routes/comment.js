//exprss router router  we created
const router = require('express').Router()
// require the model first 
let Comment = require('../models/comment')

//request /Project/
router.route('/all').get((req,res) =>{
    //list of all the Project in json
    Comment.find()
    .then(Comment => res.json(Comment))
    .catch(err => res.status(400).json('Error: ' + err))
})

///Project/add
router.route('/add').post((req,res) => {
    const answer = req.body.answer
    const User_id =  req.body.User_id
    const  Post_id = req.body.Post_id
    const newComment = new Comment({
        answer,
        User_id ,
       Post_id
    })
    //save in data base 
    newComment.save()
    .then(() => res.json('Comment Added !'))
    .catch(err => res.status(400).json('Error: ' + err))
})
//calling id as var an object 
//return info about that object
//pass id by url
router.route('/:id').get((req,res) => {
    Comment.findById(req.params.id)
    .then(Comment => res.json(Comment))
    .catch(err => res.status(400).json('Error: ' + err))
})
//delete
//pass id by url
router.route('/:id').delete((req,res) => {
    Comment.findByIdAndDelete(req.params.id)
    .then(() => res.json('Comment Deleted !'))
    .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router
