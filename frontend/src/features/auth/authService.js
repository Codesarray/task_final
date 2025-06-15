import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

// Login user
const login = async (userData) => {
  const response = await axios.post(`${API_URL}/api/users/login`, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

// Logout user
const logout = async () => {
  await axios.post(API_URL + "/api/users/logout");
  localStorage.removeItem("user");
};

const authService = {
  login,
  logout,
};

export default authService;
