
import { log } from "console";
import foodModel from "../models/foodModel.js";
import fs from "fs"


const addFood = async (req, res) => {
   let image_filename = `${req.file.filename}`;


   const food = new foodModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: image_filename
   })

   try {
      await food.save();
      res.json({ success: true, message: "Food Added" })

   } catch (error) {
      console.log(error)
      res.json({ success: false, message: "Error" })
   }

}
//all food list
const listFood = async (req, res) => {
   try {
      const food = await foodModel.find({});
      res.json({ success: true, data: food })

   } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Error" })
   }

}
//remove food item
const removeFood = async (req, res) => {
   try {
      const food = await foodModel.findById(req.body.id)
      fs.unlink("`uploads/${food.image}`", () => { })
      await foodModel.findByIdAndDelete(req.body.delete)
      res.json({ success: true, message: "Deleted Successfully" })

   } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Not Deleted" })
   }

}





export { addFood, listFood, removeFood };