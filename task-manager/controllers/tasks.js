const getAllTasks = (req, res) => {
  res.send("get all tasks");
};

const createTask = (req, res) => {
  res.send("create task");
};

const getTask = (req, res) => {
  res.send("get single tasks");
};

const updateTask = (req, res) => {
  res.send("update task");
};

const deleteTasks = (req, res) => {
  res.send("delete tasks");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTasks,
};
