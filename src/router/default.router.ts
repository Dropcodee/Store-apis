import { Router, Request, Response } from 'express';

const defaultRouter = Router();

defaultRouter.get('/', (req, res) => {
  res.status(200).json({
    message: 'Na wetin pass ur jurisdiction wey u wan dey do now ba 🙄😒',
  });
});

defaultRouter.get('/healthcheck', (req: Request, res: Response) => {
  res.status(200).json({ message: 'success' });
});

export default defaultRouter;
