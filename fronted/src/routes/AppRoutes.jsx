import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from '../screens/Login.jsx'
import Register from "../screens/Register.jsx";
import Home from "../screens/Home.jsx";

const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;
