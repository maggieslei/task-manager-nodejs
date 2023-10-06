const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

const PORT = 3000;

// middleware needed for req.body parsing
app.use(express.json());

// routes
app.get('/hello', (req, res) => {
  res.send('Task manager app');
});

app.use('/api/v1/tasks', tasks);

app.listen(PORT, () => {
  console.log('Server is running in port ' + PORT);
});
