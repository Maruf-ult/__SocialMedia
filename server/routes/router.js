import express from "express";
import { fileUpload } from "../modules/module.js";
import upload from "../uploadOPeration/upload.js";
import { vedioUpload } from "../modules/module.js";
const router = express.Router();
router.post("/upload", upload.single("vedio"),fileUpload);
router.post("/vedioUpload", upload.single("vedio"),vedioUpload);
export default router;