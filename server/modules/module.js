import vModel from "../dataModel/schema.js";

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
