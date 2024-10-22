import  express from "express"
import { createMsg, deleteMsg, getMsg, getSingleMsg, updateMsg } from "../controller/msg.js"



const route=express.Router()
route.post("/create",createMsg)
route.get("/getMyMsg",getMsg)
route.get("/getSingle/:id",getSingleMsg)
route.put("/update/:id",updateMsg)
route.delete("/delete/:id",deleteMsg)



export default route