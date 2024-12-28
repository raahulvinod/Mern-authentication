import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import cookieParser from 'cookie-parser';

import connectDb from './config/connectDb';
import { APP_ORIGIN, NODE_ENV, PORT } from './constants/env';
import errorHandler from './middleware/errorHandler';
import { OK } from './constants/http';
import authRoutes from './routes/auth.route';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: APP_ORIGIN,
    credentials: true,
  })
);
app.use(cookieParser());

app.get('/', (req, res, next) => {
  res.status(OK).json({ message: 'Hello, world' });
});

app.use('/auth', authRoutes);

app.use(errorHandler);

app.listen(PORT, async () => {
  console.log(`Server is running at PORT ${PORT} in ${NODE_ENV} environment.`);
  await connectDb();
});
