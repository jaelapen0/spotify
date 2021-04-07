import React from "react";
import { AuthRoute, ProtectedRoute } from './components/util/route_util'
import {Switch, Route} from "react-router-dom";
import Header from "./components/header/head_container"
import Splash from "./components/splash/splash"
import Login from "./components/session/login_form_container"
import Signup from "./components/session/signup_form_container"
import Home from "./components/home/home_container"
//import './App.css';
import "../src/stylesheets/index.css"
import SignupForm from "./components/session/signup_form";
const App = () => {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <AuthRoute path="/signup" component={Signup} />
        <AuthRoute path="/login" component={Login} />
        <Route path="/home" component={Home} ></Route>
        <Route exact path="/" component={Splash}/>
      </Switch>
    </div>
  );
}

export default App;
