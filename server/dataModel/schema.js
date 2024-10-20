import mongoose from "mongoose";

const SchemaModel = new mongoose.Schema({
    video: {
        type: String,
        required: true
    }
});

const vModel = mongoose.model("Video", SchemaModel);

export default vModel;
