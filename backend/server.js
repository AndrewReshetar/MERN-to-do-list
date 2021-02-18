const taskRouter = require('./routes/taskRouter');
const dotenv = require('dotenv');
dotenv.config({path: './.env'});
const connectDB = require('./config/db');
connectDB();
const express = require('express');
const app = express();
app.use(express.json());

app.use('/api/tasks', taskRouter);


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('Server is started...')
})