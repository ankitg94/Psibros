import express from "express"
import  {configDotenv } from "dotenv"
import cors from "cors"
import { connectDb } from "./config/connectDb.js"
import msg from "./route/msg.js"
configDotenv()
connectDb()
const app = express()
app.use(cors())
app.use(express.json())
app.use("/api/v1/msg",msg)
const PORT=process.env.Port
app.listen(PORT,()=>{
console.log(`server is running succesfully  at the ${PORT}`)
})