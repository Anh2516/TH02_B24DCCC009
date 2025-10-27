import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Weather from './components/Bai1/Weather';
import StudentList from './components/Bai2/StudentList';
import StudentDetail from './components/Bai2/StudentDetail';
import NewsList from './components/Bai3/NewsList';
import Navbar from './Menu/NavBar';
import './App.css';

const App: React.FC = () => {
  return (
        <Router>
      <Navbar />
      <div className="container-navbar">
  <Navbar />
</div>

<div className="main-content">
  <Routes>
    <Route path="/bai1" element={<Weather />} />
    <Route path="/bai2" element={<StudentList />} />
    <Route path="/bai2/:id" element={<StudentDetail />} />
    <Route path="/bai3" element={<NewsList />} />
  </Routes>
</div>

    </Router>
  );
};

export default App;
