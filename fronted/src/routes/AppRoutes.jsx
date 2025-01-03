// src/routes/AppRoutes.jsx
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "../screens/Login.jsx";
import Register from "../screens/Register.jsx";
import Home from "../screens/Home.jsx";
import Content from "../screens/Content.jsx";
import ProtectedRoute from "./ProtectedRoute"; // Import the ProtectedRoute component
import Project from "../screens/Project.jsx";

const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/content"
            element={
              <ProtectedRoute>
                <Content />
              </ProtectedRoute>
            }
          />{" "}
          {/* Protect the Content route */}
          <Route
            path="/project/:id"
            element={
              <ProtectedRoute>
                <Project />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;
