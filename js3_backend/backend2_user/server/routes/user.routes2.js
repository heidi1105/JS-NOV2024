import {Router} from "express";

import {getAllUsers, getOneUser, createUser, updateOneUser, deleteOneUser} from "../controllers/user.controller2.js";

const router = Router();


router.route("/users") // no /api because the /api is added in server.js
    .get(getAllUsers)
    .post(createUser)

router.route("/users/:id")
    .get(getOneUser)
    .put(updateOneUser)
    .delete(deleteOneUser)

export default router;