import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import styled from 'styled-components'
import * as Yup from "yup";


//validating usertype and login information
const formSchema = Yup.object().shape({
  userType: Yup
    .string()
    .required("Must include selection."),
  username: Yup
    .string()
    .required("Username is Required")
    .min(3, "Usernames must be at least 3 characters long."),
  email: Yup
    .string()
    .email("Must be a valid email address.")
    .required("Must include email address."),
  password: Yup
    .string()
    .required("Password is Required")
    .min(6, "Passwords must be at least 6 characters long."),
});

function App() {

  //state hook
  const [form, setForm]=useState({
    userType: "",
    username: "",
    email: "",
    password: "",
  })

  

//event handler for input changes   
const handleChange= event => {
  const {name, type, value, checked } = event.target;
  const updatedInfo = type === "checkbox" ? checked: value
  setForm({ ...form, [name]: updatedInfo})
}

//main component function return, returns login form
  return (
    <div className="App">
      <h1>Food Truck Trackr</h1>
       <form>

         {/* diner or food truck operator radio selection */}
         <div className="userTypeForm">
         <h2>Are you looking for a food truck or do you operate food truck?</h2>
         <label htmlFor="userType">Diner 
            <input name="userType" type="radio" value="a" checked={form.userType==="a"} onChange={handleChange} />
         </label>
         <label htmlFor="userType">Operator
            <input name="userType" type="radio" value="b" checked={form.userType==="b"} onChange={handleChange} />
         </label>
         </div>

         {/* username/pass/email */}
         <label htmlFor="username"> Enter Your Username:
           <input name="username" type="text" value={form.username} placeholder="username" onChange={handleChange} />
         </label>
         <label htmlFor="email"> Enter Your Email:
           <input name="email" type="email" value={form.email} placeholder="email" onChange={handleChange} />
         </label>
         <label htmlFor="password">Enter Your Password:
          <input name="password" type="text" value={form.password} placeholder="password" onChange={handleChange} />
         </label>

          <br></br><button type="submit">Submit</button>
       </form>
    </div>
  );
}

export default App;
