import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import connectDb from './config/connectDb';

const app = express();

const PORT = process.env.PORT || 4000;

connectDb();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello, world' });
});

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
