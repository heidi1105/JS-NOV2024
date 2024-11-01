import {Router} from "express";
import ProductController from "../controllers/product.controller.js";

const router = Router();

router.route("/products")
    .get(ProductController.getAll)
    .post(ProductController.addOne)

router.route("/products/:id")
    .get(ProductController.getOne)
    .put(ProductController.updateOne)
    .delete(ProductController.deleteOne)

export default router;