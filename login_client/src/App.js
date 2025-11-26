import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './component/Login';
import Signup from './component/Signup';
import Home from './component/Home';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/sign-in" element={<Login/>}/>
        <Route exact path="/sign-up" element={<Signup/>}/>
        <Route exact path="/home" element={<Home/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
