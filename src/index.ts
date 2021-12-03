import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import logger from './config/logger';
import dotenv from 'dotenv';
import { routes } from './router';
import { NotFoundError } from './helpers/errors/NotFoundError';
import { ErrorMiddleware } from './middleware/ErrorMiddleware';

const app = express();
dotenv.config();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const host = process.env.APP_HOST as string;
const port = Number(process.env.APP_PORT);

app.listen(port, host, () => {
  // db connection
  //   connectDB();
  
  logger.info(`🚀🚀🚀 Server listing at http://${host}:${port} 🔥🔥🔥`);
  // initialize application router
  routes(app);
  app.all('*', () => {
    throw new NotFoundError('This route does not exist on this platform');
  });
  app.use(ErrorMiddleware);
  
});
