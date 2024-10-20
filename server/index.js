import express from 'express';
import dbCon from './utils/database.js';
import cors from 'cors';
import router from './routes/router.js';

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));
app.use(cors());

dbCon();

app.use(router);

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});
