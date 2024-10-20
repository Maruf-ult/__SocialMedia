import express from "express";
import multer from "multer";
import {v4 as uuidv4} from 'uuid'
import path from 'path'

const storage = multer.diskStorage({
     destination:function(req,res,cb){
          cb(null,"./uploads")
     },
     filename:function(req,file,cb){
          cb(null,file.fieldname+"-"+ uuidv4() + path.extname(file.originalname))
     }
})


const upload = multer({storage:storage})


export default upload;

