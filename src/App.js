import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginComponent from './container/loginContainer';
import SignupComponent from './container/signupContainer';
import { Route, Switch } from "react-router-dom"
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <p>Hello</p>
    </div>
  );
}

export default App;

{/* <LoginComponent/>
      <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/login" exact component={LoginComponent}></Route>
          <Route path="/signup" exact component={SignupComponent}></Route>
        </Switch>
     */}