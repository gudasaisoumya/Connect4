import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Hello from './Hello.js';


ReactDOM.render(
  <Router>
    <Switch>
    <Route path="/" exact component={App}/>
    <Route path="/hello" exact component={Hello}/>
   
    </Switch>
    
  </Router>
  
    ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
