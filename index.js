import busboy from 'busboy';
import busboyBodyParser from 'busboy-body-parser';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(busboy.json());
app.use(busboyBodyParser.json());
app.use(cors());

app.listen(8000, () => {
  console.log('WS Rodando.');
});
