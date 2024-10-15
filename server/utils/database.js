import mongoose from "mongoose";

const dbCon=async()=>{
     try {
        await  mongoose.connect('mongodb+srv://maruf:s5h7O8GDVI2ewHlu@vedio-con.gm3tl.mongodb.net/?retryWrites=true&w=majority&appName=vedio-con')
          console.log(`database connected successfully`)
     } catch (error) {
          console.log(error)
     }
}

export default dbCon