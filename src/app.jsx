import React from 'react';
import styles from "./app.module.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './route/home';
import Detail from './route/detail';


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Routes>
        <Route path="/movie/:id" element={<Detail />}></Route>
      </Routes>
    </Router>
  );

}

export default App;
