import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './component/Signup';
import SignIn from './component/SignIn';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< Signup />} />
        <Route path="/signin" element={< SignIn/>} />
      </Routes>
    </Router>
   );
}

export default App;
