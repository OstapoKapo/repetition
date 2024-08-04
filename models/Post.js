import mongoose from "mongoose";

const {Schema} = mongoose;

const postSchema = new Schema({
    image:{
        type:String,
        unique: true,
        required: true
    },
    content:{
        type:String,
        unique: true,
        required: true
    },
    username:{
        type:String,
        unique: false,
        required: true
    }
},{timestamps: true});

module.exports =
    mongoose.models.Post || mongoose.model('Post', postSchema);