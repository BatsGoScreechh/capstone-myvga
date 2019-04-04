import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyVGA from './components/MyVGA'
import { BrowserRouter as Router } from "react-router-dom"


ReactDOM.render(
    <Router>
        <MyVGA />
          </Router>
    , document.getElementById('root'))