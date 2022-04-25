import React from 'react';
import styles from "./app.module.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './route/home';
import Detail from './route/detail';
import Header from './components/header';
import Group from './route/group';


function App() {


  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:id" element={<Detail />}></Route>
        <Route path="/:genre" element={<Group />}></Route>
      </Routes>
    </Router>
  );

}

export default App;
