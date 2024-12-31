// src/screens/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../context/user.context.jsx";
import Content from "./Content.jsx";
import logo from "../assets/image/logo.png";
import logo2 from "../assets/image/logo2.png";

const Home = () => {
  const { user, logout } = useUser();

  const handleLogout = () => {
    logout();
  };

  const getUserName = (email) => {
    return email.split("@")[0];
  };
  return (
    <div>
      {" "}
      {user ? (
        <div className="flex flex-col min-h-screen bg-gray-100 bg-red-50">
          <header className="bg-white shadow-md w-full py-4">
            <div className="container mx-auto flex justify-between items-center ">
              {/* <h1 className="text-2xl font-bold text-gray-800">
            CodeConvo
          </h1> */}
          
              <div className="w-52 h-10">
                <img
                  src={logo2}
                  alt="Logo"
                  // class="object-contain"
                />
              </div>
              <nav>
                <div className="flex items-center">
                  <span className="text-gray-600 mr-4">
                    Hello, {user ? getUserName(user.email) : null}!
                  </span>
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Logout
                  </button>
                </div>
              </nav>
            </div>
          </header>
          <main className="flex-grow container mx-auto mt-10 px-4">
            <Content />
          </main>
          <footer className="bg-white shadow-md w-full py-4">
            <div className="container mx-auto text-center text-gray-600">
              <p>&copy; 2023 Your Company. All rights reserved.</p>
            </div>
          </footer>
        </div>
      ) : (
        <div className=" flex w-screen h-screen bg-red-50">
          <div className="flex w-screen justify-center items-center gap-4">
            <div className=" flex justify-center w-1/2 h-4/5">
              <img src={logo} className="" />
            </div>
            <div className="flex flex-col w-1/3 h-1/3 gap-4">
              <div className="text-4xl font-semibold border-b-2 border-slate-400 text-center p-4">
                <h1>CodeConvo</h1>
              </div>
              <div className="font-semibold	border-b-2 border-slate-400 p-4 text-center">
                <p>Collaborate and code seamlessly!</p>
              </div>
              <div className="flex flex-col gap-2">
                <Link
                  to="/login"
                  className="bg-slate-300 mx-10 p-2 rounded-md hover:bg-slate-400 text-center"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-slate-300 mx-10 p-2 rounded-md hover:bg-slate-400 text-center"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
