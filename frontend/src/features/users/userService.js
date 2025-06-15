import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const addEmployee = async (userData) => {
  const response = await axios.post(`${API_URL}/api/users`, userData);
  return response.data;
};

const getEmployees = async () => {
  const response = await axios.get(`${API_URL}/api/users`);
  return response.data;
};

const updateEmployee = async (userData) => {
  const response = await axios.put(
    `${API_URL}/api/users/` + userData._id,
    userData
  );
  return response.data;
};

const deleteEmployee = async (userId) => {
  const response = await axios.delete(`${API_URL}/api/users/` + userId);
  return response.data;
};

const userService = {
  addEmployee,
  getEmployees,
  updateEmployee,
  deleteEmployee,
};
export default userService;
