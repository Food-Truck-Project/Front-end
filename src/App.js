import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import styled from 'styled-components';
import * as yup from "yup";
import axios from "axios";
import formSchema from "./schema.js";
import SignUp from "./SignUp";
import LogOut from "./logout"
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
            </ul>    
        <Switch>
        <Route path="/signup">
        <SignUp />
        </Route>
        <Route path="/logout">
        <LogOut />
        </Route>
        </Switch>
        </div>
    )
}





export default App;