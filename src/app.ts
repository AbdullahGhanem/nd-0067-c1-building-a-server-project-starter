import express, { Request, Response } from 'express';
import routes from './routes';

const app = express();

app.get('/', (_: Request, res: Response): void => {
    res.send('sever is working');
});

app.use('/api', routes);

export default app;
