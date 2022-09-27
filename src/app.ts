import express from 'express';
import httpErrorMiddleware from './middleware/http.error.middleware';
import routes from './routes';

const app = express();

app.use(express.json());
app.use('/products', routes.productsRouter);
app.use(httpErrorMiddleware);

export default app;
