import React, { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { login, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) toast.error(message);
    if (isSuccess || user) navigate(user.role === "admin" ? "/admin" : "/");
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) =>
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  if (isLoading) return <Spinner />;

  return (
    <div className="flex items-center justify-center mt-20">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <section className="text-center">
          <h1 className="text-3xl font-bold flex items-center justify-center">
            <FaSignInAlt className="mr-2" /> Login
          </h1>
          <p className="text-gray-500 mt-2">Login to manage your tasks</p>
        </section>
        <section className="mt-8">
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={onChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={onChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter your password"
              />
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
export default Login;
