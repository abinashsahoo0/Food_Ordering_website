import mongoose from "mongoose"

const foodSchema = new mongoose.Schema(
    {
        name: { type: String, required: [true,"Name is required"] },
        description: { type: String, required: [true,"Description is required"]  },
        price: { type: Number, required: true },
        image: { type: String, required: true },
        category: { type: String, required: true }

    }
)

const foodModel = mongoose.models.food || mongoose.model("food", foodSchema)
export default foodModel;