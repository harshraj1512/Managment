import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './component/Signup';
import SignIn from './component/SignIn';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< Signup />} />
        <Route path="/signin" element={< SignIn/>} />
        <Route path="/dashboard" element={< Dashboard />} />
      </Routes>
    </Router>
   );
}

export default App;
