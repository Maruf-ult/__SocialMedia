import express from 'express'
import dbCon from './utils/database.js';
import cors from 'cors';


const PORT = 4000;

const app = express();
app.use(express.json())
app.use(cors)
dbCon();

app.listen(PORT,()=>{
     console.log(`server is running on ${PORT}`);
})
