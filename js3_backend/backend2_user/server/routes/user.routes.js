import {Router} from "express";
import UserController from "../controllers/user.controller.js";

const router = Router();


router.route("/users") // no /api because the /api is added in server.js
    .get(UserController.getAll)
    .post(UserController.addOne)

router.route("/users/:id")
    .get(UserController.getOne)
    .put(UserController.updateOne)
    .delete(UserController.deleteOne)

export default router;