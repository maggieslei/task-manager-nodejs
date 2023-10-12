const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

const PORT = 3000;

// middleware needed for serving static files
app.use(express.static('./public'));
// middleware needed for req.body parsing
app.use(express.json());

// routes
app.use('/api/v1/tasks', tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log('Server is running in port ' + PORT);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
