import { Router } from "express";
import { loginUser, registerUser,logoutUser, refreshAccessToken } from "../controllers/user.contoller.js"
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router()
router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount:1
        },
        {
            name: "coverImage",
            maxCount:1
        }
    ]),
    registerUser)

//secured router
router.route("/login").post(loginUser)
router.route("refresh-token").post(refreshAccessToken)
router.route("/logout").post(verifyJWT,logoutUser)
export default router