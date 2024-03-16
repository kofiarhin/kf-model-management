import "./styles/app.styles.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Header from "./Components/Header/Header";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Models from "./Pages/Models/Models";
import Castings from "./Pages/Castings/Castings";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/models" element={<Models />} />
          <Route path="/castings" element={<Castings />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
