import mongoose from "mongoose";

const messageSchema =new mongoose.Schema({
   title:{
    type:String,
    trim:true
   },
   auth:{
    type:String
   },
   publish:{
      type:Date
   },
   genre:{
    type:String
   }

},{timestamps:true})

export const msg = mongoose.model("msgs",messageSchema)