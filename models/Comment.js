const mongoose = require('mongoose')

//create mongoose schema 
const Schema = mongoose.Schema

const CommentSchema = new Schema({
    answer:{
        type: String,
        required: true,
    },
 User_id:{
          type: Schema.Types.ObjectId,
          ref: "User",
        required: true,
    },
     Post_id:{
          type: Schema.Types.ObjectId,
          ref: "post",
        required: true,
    },
    date:{
        type: Date,
  },
    }, 
 {timestamps: true}) //field when it's created and when it's modified

//'User' the name we are using
const Comment = mongoose.model('Comment', CommentSchema)

module.exports = Comment