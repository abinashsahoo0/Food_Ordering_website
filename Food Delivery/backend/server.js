import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"

//config
const app=express()
const port=4000
//middlewares
app.use(express.json())
app.use(cors())

//db connection 
connectDB();
//api endpoint

app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))


app.get("/",(req,res)=>{
 res.send("API working.....")

})

app.listen(port,()=>{

    console.log(`server started at http://localhost:${port}`)
})

//mongodb+srv://shubhankarpatel2004:gauB0s4fwQTHShQK@cluster0.p01hqxu.mongodb.net/?