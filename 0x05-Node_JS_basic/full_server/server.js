import express from 'express';
import approuter from './routes/index';

const app = express();

approuter(app);
app.listen(1245);

export default app;
module.exports = app;
