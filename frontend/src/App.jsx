import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Header from "./components/Header";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import TaskPage from "./pages/TaskPage";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/AdminRoute";

function App() {
  return (
    <Router>
      <Header />
      <Toaster position="top-center" reverseOrder={false} />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/login" element={<Login />} />

          {/* Routes for logged-in users (both employee and admin) */}
          <Route path="" element={<PrivateRoute />}>
            <Route path="/" element={<EmployeeDashboard />} />
            <Route path="/task/:id" element={<TaskPage />} />
          </Route>

          {/* Routes for admin users only */}
          <Route path="" element={<AdminRoute />}>
            <Route path="/admin" element={<AdminDashboard />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
