import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import styled from 'styled-components';
import * as yup from "yup";
import axios from "axios";




function LogOut(){
    return (
    <div className="Logout">
      <h1>Food Truck Trackr</h1>
      <ul className="headerNav">
      <li><Link to="/signup">Sign Up</Link></li>
      <li><Link to="/login">Log In</Link></li>
      </ul>
      <button>Log Out</button>
    </div>
    )
}


export default LogOut;

