import express from 'express';
import httpErrorMiddleware from './middleware/http.error.middleware';
import routes from './routes';

const app = express();

app.use(express.json());
app.use('/products', routes.productsRouter);
app.use('/users', routes.userRouter);
app.use('/orders', routes.orderRouter);
app.use('/login', routes.loginRouter);
app.use(httpErrorMiddleware);

export default app;
