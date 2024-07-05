import mongoose from "mongoose"

export const connectDB=async()=>{
  await  mongoose.connect("mongodb+srv://shubhankarpatel2004:gauB0s4fwQTHShQK@cluster0.p01hqxu.mongodb.net/Food_Delivery").then(()=>console.log("DB connected"));
}