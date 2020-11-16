import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import styled from 'styled-components';
import * as Yup from "yup";
import axios from "axios";


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

  //state hook for login information
  const [form, setForm]=useState({
    userType: "",
    username: "",
    email: "",
    password: "",
  })

  //state hook for submit button enabled/disabled
  const [buttonDisabled, setButtonDisabled] = useState(true);

  //setting up errors for validation
  const [errors, setErrors] = useState({
  userType: "",
  username: "",
  email: "",
  password: "",
  });

  //reach for form validation, tests one part 
  const validateChange = e => {
    // Reach will allow us to "reach" into the schema and test only one part.
    Yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(valid => {
        setErrors({
          ...errors,
          [e.target.name]: ""
        });
      })
      .catch(err => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0]
        });
      });
  };

//event handler for input changes   
const handleChange= event => {
  event.persist();
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
    .post("https://reqres.in/api/users", form)
    .then(res => {
      setPost(res.data); // get just the form data from the REST api

      // reset form if successful
      setForm({
        userType: "",
        username: "",
        email: "",
        password: "",
      });
    })
    .catch(err => console.log(err.response));
};


//main component function return, returns login form
  return (
    <div className="App">
      <h1>Food Truck Trackr</h1>
       <form onSubmit={formSubmit}>

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

          <br></br><button disabled={buttonDisabled}>Submit</button>
       </form>
    </div>
  );
}

export default App;
