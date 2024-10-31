// import model
import Product from "../models/product.model.js"

const ProductController = {
    getAll: async (req, res)=>{
        try{
    
        }catch(err){

        }
    },
    getOne: async(req, res)=>{
        try{

        }catch(err){

        }
    },
    addOne: async(req, res)=>{
        try{
            const newProduct = await Product.create(req.body); // create the product based on req.body
            res.json(newProduct);
        }catch(err){
            console.log(err);
            res.status(400).json(err);
        }
    },
    updateOne: async(req, res)=>{
        try{

        }catch(err){

        }
    },
    deleteOne: async(req, res)=>{
        try{

        }catch(err){

        }
    },

}
export default ProductController;
