import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Complaint from './components/complaint';
import ComplaintPageList from "./components/displayComplaints"


import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/complaint" element={<Complaint />} />
        <Route path="/display" element={<ComplaintPageList />} />

       {/*  <Route path="/movie/:src" element={<MovieDetails />} />
        <Route path="/watchnow/:title" element={<Movie />} /> */}

      </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
