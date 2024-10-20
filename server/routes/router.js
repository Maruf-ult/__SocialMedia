import express from "express";
import { fileUpload } from "../modules/module.js";
import upload from "../uploadOPeration/upload.js";


const router = express.Router();

router.post("/upload", upload.single("vedio"),fileUpload);

export default router;