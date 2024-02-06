import express from 'express'
import indexRouter from './modules/index'

const app = express();

app.use(express.json());

app.use('/', indexRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
