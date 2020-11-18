import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
// import styled from 'styled-components';
// import * as yup from "yup";
// import axios from "axios";
// import formSchema from "./validation/schema.js";
import SignUp from "./components/SignUp";
import LogOut from "./components/Logout"
import LogIn from "./components/LogIn"
import DinerProfile from "./components/DinerProfile";
import "./App.css";


function App(){
    return (
        <div className="App">
        <h1>Food Truck Trackr</h1>
            <ul className="headerNav">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/login">Log In</Link></li>
                <li><Link to="/logout">Log Out</Link></li>
                <li><Link to="/dinerprofile">Diner Profile</Link></li>
            </ul>    
        <Switch>
        <Route path="/signup">
        <SignUp />
        </Route>
        <Route path="/logout">
        <LogOut />
        </Route>
        <Route path="/login">
        <LogIn />
        </Route>
        <Route path="/dinerprofile">
        <DinerProfile />
        </Route>
        </Switch>
        </div>
    )
}





export default App;