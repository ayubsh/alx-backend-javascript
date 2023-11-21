import approuter from './routes/index';

const express = require('express');

const app = express();

app.use(approuter);
app.listen(1245);
