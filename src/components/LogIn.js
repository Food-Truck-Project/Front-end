// import '../';
import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import * as yup from "yup";
import axios from "axios";
import formSchema from "../validation/loginSchema";
import { useHistory } from 'react-router-dom'


//styling div for errors with component function return
const LoginErrors=styled.div`
color: red;
` 
//end styled component for login errors 


//begin component function
function LogIn() {
  const { push } = useHistory()

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
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('userID', res.data.user_id)
      setPost(res.data); // get just the form data from the REST api

      // reset form if successful
      setForm({
        role: "",
        username: "",
        email: "",
        password: "",
      });
      push('/trucklist')
      window.location.reload()
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
          <br></br>
         <label htmlFor="role">Operator
            <input name="role" type="radio" value="2" checked={form.role==="2"} onChange={handleChange} />
         </label>
         </div>
      <SignInWrapper>
        <div className="childWrapper">
          <h1>Login</h1>
         {/* username/pass/email inputs */}
         <label htmlFor="username"> Enter Your Username:
           <input className={errors.username ? "error" : " "} name="username" type="text" value={form.username} placeholder="username" onChange={handleChange} />
         </label>
         <label htmlFor="password">Enter Your Password:
          <input className={errors.password ? "error" : ""} name="password" type="password" value={form.password} placeholder="password" onChange={handleChange} />
         </label>
        {/* submit / login button */}
          <br></br><button disabled={buttonDisabled}>Log In</button>
          <h2 className="h2">Not logged in yet?</h2>
          <a href="/singup"> Click here!</a>
          </div>
          </SignInWrapper>
       </form>
    </div>
  );
}

const SignInWrapper = styled.div`
margin-top: 80px;
width: 100%;
height: 300px;
display: flex;
align-items: center;
justify-content: center;
font-family: 'Alegreya Sans SC', sans-serif;

.childWrapper{
border-radius: 20px;
margin-top: 40px;
width: 400px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: lightgray;
padding: 30px

}

h1{
  font-size: 40px;
}
label {
  margin-top: 10px;
}

input {
  outline: none;
  margin-top: 5px;

  transition-timing-function: ease-out;
}
input:focus {
  border: 1px solid blue;
  transition-timing-function: ease-out;
}

.error{
  border: 1px solid red;
}

.pass{
  border: 1px solid green;
}

.h2{
 margin-top: 3rem;;
}

button {
  width: 15rem;
  height: 5rem;
  outline: none;
  border: none;
  cursor: pointer;
  background: rgb(191, 163, 244);
  border-radius: 10px;
  transition-timing-function: ease-out;
 
  :hover {
    color: black;
    background: lightgray;
    border: 1px solid black;
    border-radius: 5px;
    transition-timing-function: ease-out;
  }

}

a{
  text-decoration: none;
  color: black;
  
  :hover{
    transition-timing-function: ease-in-out;
    transition-delay: 0.5s;
    border-bottom: 1px solid black;
  }
}
}
`;

export default LogIn;

