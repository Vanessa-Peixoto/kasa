import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './_style.scss'
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorPage from './pages/ErrorPage';
import Location from './pages/Location'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <Router>
    <Header/>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/location/:id' element={<Location/>}/>
          <Route path="/apropos" element={<About />}/>
          <Route path="*" element={<ErrorPage />} />
        
      </Routes>
    <Footer/>
  </Router>
</React.StrictMode>,
);
