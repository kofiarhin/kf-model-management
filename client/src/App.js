import React from "react";
import "./app.styles.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Header from "./Components/Header/Header";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Models from "./Pages/Models/Models";
import Castings from "./Pages/Castings/Castings";
import Messages from "./Pages/Messages/Messages";
import Upload from "./Pages/Upload/Upload";
import CreateCasting from "./Pages/CreateCasting/CreateCasting";
import Model from "./Pages/Model/Model";
import Casting from "./Pages/Casting/Casting";
import Footer from "./Components/Footer/Footer";

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
          <Route path="/models/:id" element={<Model />} />
          <Route path="/castings" element={<Castings />} />
          <Route path="/castings/:id" element={<Casting />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/castings/create" element={<CreateCasting />} />
        </Routes>
        <Footer />
      </Router>
      <ToastContainer />
    </div>
  );
};

export default App;
