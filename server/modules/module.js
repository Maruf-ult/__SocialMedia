import fs from "fs"; //file system
import { v4 as uuidv4 } from "uuid";
import vModel from "../dataModel/schema.js";
import { exec } from "child_process";
import { error } from "console";
import { stderr, stdout } from "process";

export const fileUpload = async (req, res) => {
  try {
    const video = req.file ? req.file.path : null;
    const newVideo = new vModel({ video });

    if (!newVideo) {
      return res.status(401).json({ success: false, msg: "Not found" });
    }

    await newVideo.save();

    return res
      .status(201)
      .json({ success: true, msg: "File uploaded successfully" });
  } catch (error) {
    return res
      .status(401)
      .json({ success: false, msg: `An internal error occurred: ${error}` });
  }
};

//for vedio upload
export const vedioUpload = async (req, res) => {
  const lessenId = uuidv4();
  const vedioPath = req.file.path;
  const outputPath = `./uploads/courses/${lessenId}`;
  const hlsPath = `${outputPath}index.m3u8`;
  console.log("hlsPath", hlsPath);

  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true });
  }

  // ffmpeg
  const ffmpegCommand = `ffmpeg -i${vedioPath} -codec:v
  libx264 -codec:a aac -hls_time 10 -hls_playlist_type vod
  -hls_segment_filename "${outputPath}/segment%03d.ts" -start_number
  0 ${hlsPath}`;



  // no queue because of poc, not to be used in production
  exec(ffmpegCommand,(error,stdout,stderr)=>{
    if(error){
      console.log(`exec error: ${error}`)
    }
    console.log(`stdout: ${stdout}`)
    console.log(`stdout: ${stderr}`)
    const vediourl = `http://localhost:4000/uploads/courses/${lessenId}/index.m3u8`;
    res.json({
      message:"vedio converted to HLS format",
      vedioUrl: vediourl,
      lessonId: lessenId
    })

  })
};
