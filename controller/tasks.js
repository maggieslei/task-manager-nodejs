const getAllTasks = (req, res) => {
  res.send('all items from the file');
};

const createTask = (req, res) => {
  res.json(req.body);
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

const deleteTask = (req, res) => {
  res.send('Delete one task');
};

const updateTask = (req, res) => {
  res.send('Edit one task');
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  deleteTask,
  updateTask,
};
