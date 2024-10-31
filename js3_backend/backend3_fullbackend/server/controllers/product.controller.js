// import model
import Product from "../models/product.model.js"

const ProductController = {
    getAll: async (req, res)=>{
        try{
            const allProducts = await Product.find() // SELECT
            res.json(allProducts)
        }catch(err){
            console.log(err);
            res.status(400).json(err);
        }
    },
    getOne: async(req, res)=>{
        try{
            const oneProduct = await Product.findById(req.params.id);
            // const oneProduct = await Product.findOne({_id: req.params.id}) // alternative: just pick one that you like
            res.json(oneProduct);
        }catch(err){
            console.log(err);
            res.status(400).json(err);
        }
    },
    addOne: async(req, res)=>{ 
        try{
            const newProduct = await Product.create(req.body); // create the product based on req.body
            res.json(newProduct); // default status: 200 (success)
        }catch(err){
            console.log(err);
            res.status(400).json(err); // a response with error
        }
    },
    updateOne: async(req, res)=>{
        const options = {
            new: true, // return the updated object instead of the original one
            runValidators: true // apply validation so that title cannot be empty etc
        }
        try{
            const updatedProduct = await Product.findByIdAndUpdate(
                req.params.id, // get the id from the path (when someone reaches localhost:8000/api/products/1234)
                req.body, // get the form data inside request
                options
            )
            res.json(updatedProduct);
        }catch(err){
            console.log(err);
            res.status(400).json(err);
        }
    },
    deleteOne: async(req, res)=>{
        try{
            const deletedProduct = await Product.findByIdAndDelete(req.params.id);
            res.json(deletedProduct)
        }catch(err){
            console.log(err);
            res.status(400).json(err);
        }
    },

}
export default ProductController;
