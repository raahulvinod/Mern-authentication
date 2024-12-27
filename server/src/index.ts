import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import connectDb from './config/connectDb';
import { NODE_ENV, PORT } from './constants/env';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello, world' });
});

app.listen(PORT, async () => {
  console.log(`Server is running at PORT ${PORT} in ${NODE_ENV} environment.`);
  await connectDb();
});
