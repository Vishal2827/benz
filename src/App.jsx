import React from 'react';
import Nav from './Components/Nav';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import Category from './pages/Category';
import Contact from './pages/Contact'; // ✅ Fix here
import Register from './pages/Register';
import { Contact as ContactIcon } from 'lucide-react';


const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/category" element={<Category />} />
        <Route path="/contact" element={<Contact />} /> {/* ✅ Use the correct Contact component */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
