import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import logger from './config/logger'
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const host = process.env.APP_HOST as string;
const port = Number(process.env.APP_PORT)

app.listen(port, host, () => {
  logger.info(`🚀🚀🚀 Server listing at http://${host}:${port} 🔥🔥🔥`);

  //   connect();

  // initialize application
  //   routes(app);
});
