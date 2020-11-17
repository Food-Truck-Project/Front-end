// import '../';
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import styled from 'styled-components';
import * as yup from "yup";
import axios from "axios";
import formSchema from "../validation/schema";


//styling div for errors with component function return
const LoginErrors=styled.div`
color: red;
` 
//end styled component for login errors 


//begin component function
function LogIn() {

  //state hook for login information
  const [form, setForm]=useState({
    role: "",
    username: "",
    email: "",
    password: "",
  })

  //state hook for submit button enabled/disabled
  const [buttonDisabled, setButtonDisabled] = useState(true);

  //setting up errors for validation
  const [errors, setErrors] = useState({
  role: "",
  username: "",
  email: "",
  password: "",
  });

  //reach for form validation, tests one part 
  const validateChange = event => {
    yup
      .reach(formSchema, event.target.name)
      .validate(event.target.value)
      .then(valid => {
        setErrors({
          ...errors,
          [event.target.name]: ""
        });
      })
      .catch(err => {
        setErrors({
          ...errors,
          [event.target.name]: err.errors[0]
        });
      });
  };

//event handler for input changes   
const handleChange= event => {
  event.persist();
  console.log(errors);
  const newFormData = {
    ...form,
    [event.target.name]:
      event.target.type === "checkbox" ? event.target.checked : event.target.value
  };

  validateChange(event);
  setForm(newFormData);
};

//state for post request 
const [post, setPost] = useState([]);


//sets button to enabled once all fields are filled 
useEffect(() => {
  formSchema.isValid(form).then(valid => {
    setButtonDisabled(!valid);
  });
}, [form]);



//form submission event handler + axios POST
const formSubmit = event => {
  event.preventDefault();
  axios
    .post("https://trucktackert.herokuapp.com/api/users/login", form)
    .then(res => {
      setPost(res.data); // get just the form data from the REST api

      // reset form if successful
      setForm({
        role: "",
        username: "",
        email: "",
        password: "",
      });
    })
    .catch(err => console.log(err.response));
};


//main component function return, returns login form
  return (
    <div className="SignUp">
       <form onSubmit={formSubmit}>
          <LoginErrors>{errors.role}</LoginErrors>
          <LoginErrors>{errors.username}</LoginErrors>
          <LoginErrors>{errors.email}</LoginErrors>
          <LoginErrors>{errors.password}</LoginErrors>
          
         {/* diner or food truck operator radio selection */}
         <div className="roleForm">
         <h2>Are you looking for a food truck or do you operate a food truck?</h2>
         <label htmlFor="role">Diner 
            <input name="role" type="radio" value="1" checked={form.role==="1"} onChange={handleChange} />
         </label>
         <label htmlFor="role">Operator
            <input name="role" type="radio" value="2" checked={form.role==="2"} onChange={handleChange} />
         </label>
         </div>

         {/* username/pass/email inputs */}
         <label htmlFor="username"> Enter Your Username:
           <input name="username" type="text" value={form.username} placeholder="username" onChange={handleChange} />
         </label>
         <label htmlFor="email"> Enter Your Email:
           <input name="email" type="email" value={form.email} placeholder="email" onChange={handleChange} />
         </label>
         <label htmlFor="password">Enter Your Password:
          <input name="password" type="password" value={form.password} placeholder="password" onChange={handleChange} />
         </label>
        {/* submit / login button */}
          <br></br><button disabled={buttonDisabled}>Log In</button>
       </form>
    </div>
  );
}


export default LogIn;

