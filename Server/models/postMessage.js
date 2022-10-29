import mongoose from 'mongoose';


// Schema
const postSchema = mongoose.Schema({
    title : String,
    message : String,
    creator : String,
    tag : [String],
    selectedFile : String ,
    likeCount :{
        type : Number,
        default : 0
    },
    createdAt :{
        type : Date ,
        default :new Date()
    }
});

// model from schema

const PostMessage = mangoose.model('PostMessage' ,postSchema);

export default PostMessage;


