import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const getTasks = async (filters) => {
  const response = await axios.get(`${API_URL}/api/tasks`, { params: filters });
  return response.data;
};
const getTaskById = async (taskId) => {
  const response = await axios.get(`${API_URL}/api/tasks/` + taskId);
  return response.data;
};
const createTask = async (taskData) => {
  const response = await axios.post(`${API_URL}/api/tasks`, taskData);
  return response.data;
};
const updateTask = async (taskData) => {
  const response = await axios.put(
    `${API_URL}/api/tasks/` + taskData._id,
    taskData
  );
  return response.data;
};
const updateTaskStatus = async (taskData) => {
  const response = await axios.put(
    `${API_URL}/api/tasks/${taskData._id}/status`,
    {
      todos: taskData.todos,
    }
  );
  return response.data;
};
const deleteTask = async (taskId) => {
  const response = await axios.delete(`${API_URL}/api/tasks/` + taskId);
  return response.data;
};

const taskService = {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  updateTaskStatus,
  deleteTask,
};
export default taskService;
