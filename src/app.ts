import express, { Request, Response } from 'express';
import morgan from 'morgan';
import routes from './routes';

const app = express();
app.use(morgan('tiny'));

app.get('/', (_: Request, res: Response): void => {
    res.send('sever is working');
});

app.use('/api', routes);

export default app;
