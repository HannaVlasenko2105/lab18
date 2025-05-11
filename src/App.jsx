import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import MyCity from './pages/MyCity';
import MyFuture from './pages/MyFuture';
import NotFoundPage from "./pages/NotFoundPage";
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Routes>
      <Route path="/" element={<AboutMe />} />
      <Route path="/my-city" element={<MyCity />} />
      <Route path="/my-future" element={<MyFuture />} />
      <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;