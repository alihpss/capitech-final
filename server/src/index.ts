import express, { urlencoded } from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.get('/', (_req, res) => {
  res.status(200).json({ entry: 'API Capitech rodando!' });
});

app.listen(3000, () => {
  console.log('api rodando em http://localhost:3000');
});
