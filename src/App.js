import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import "./App.css";
import Header from "./components/Header/header";
import Footer from "./components/Footer/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Header />
      <Footer />
    </Router>
  );
}

export default App;


