import vModel from "../dataModel/schema.js";
import {v4 as uuidv4} from 'uuid'
import fs from 'fs' //file system
import { exec } from "child_process"; 



export const fileUpload = async (req, res) => {
  try {
    const video = req.file ? req.file.path : null;
    const newVideo = new vModel({ video });
    
    if (!newVideo) {
      return res.status(401).json({ success: false, msg: 'Not found' });
    }
    
    await newVideo.save();
    
    return res.status(201).json({ success: true, msg: "File uploaded successfully" });
  } catch (error) {
    return res.status(401).json({ success: false, msg: `An internal error occurred: ${error}` });
  }
};


//for vedio upload
export const vedioUpload = async (req,res)=>{
   const lessenId = uuidv4()
   const vedioPath = req.file.path
   const outputPath = `./uploads/courses/${lessenId}`
   const hlsPath = `${outputPath}index.m3u8`
   console.log("hlsPath",hlsPath);

   if(!fs.existsSync(outputPath)){
     fs.mkdirSync(outputPath,{recursive:true})
   }

   // ffmpeg 
  const ffmpegCommand = ``


}
