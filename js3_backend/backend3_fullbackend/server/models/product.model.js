import {model, Schema} from "mongoose";
const ProductSchema = new Schema(
    {
        title:{
            type: String,
            required: [true, "Title must be required"],
            minlength: [2, "Title must be at least 2 characters"]
        },
        description:{ // optional
            type:String,
            maxlength: [2000, "Description must be >= 2000"]
        },
        imgUrl:{
            type: String,
            required: [true, "Image url must be required"]
        },
        price:{
            type: Number,
            required: [true, "Price must be required"],
            min: [0, "Price must be positive"]
        },
        isAvailable:{
            type: Boolean,
            default: false
        }
    },{timestamps: true}
);

const Product = model("Product", ProductSchema);
export default Product;