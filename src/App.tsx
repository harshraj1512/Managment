import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './component/Signup';
import SignIn from './component/SignIn';
import Dashboard from './pages/Dashboard';
import Table1 from './pages/Table1';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< Signup />} />
        <Route path="/signin" element={< SignIn/>} />
        <Route path="/dashboard" element={< Dashboard />} />
        <Route path="/table1" element={< Table1 />} />
      </Routes>
    </Router>
   );
}

export default App;
