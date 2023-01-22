import mongoose from "mongoose";


const ProductSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true, 
        max: 100
    },
    price: {
        type: Number, 
        required: true
    },
},
{
    versionKey: false,
    timestamps: {
        createdAt: 'created_at', 
        updatedAt: 'updated_at'
    },
});

const ProductModel = mongoose.model("Product", ProductSchema, "product")

export default ProductModel
