import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import styled from 'styled-components'


function App() {

  const [form, setForm]=useState({
    username: "",
    email: "",
    password: "",
  })

//event handler for input changes   
const handleChange= event => setForm(event.target.value)



  return (
    <div className="App">
       <form>
         <label htmlFor="username"> Enter Your Username:
           <input name="username" type="text" value={form.username} placeholder="username" onChange={handleChange} />
         </label>
         <label htmlFor="email"> Enter Your Email:
           <input name="email" type="email" value={form.email} placeholder="email" onChange={handleChange} />
         </label>
         <label htmlFor="password">Enter Your Password:
          <input name="password" type="text" value={form.password} placeholder="password" onChange={handleChange} />
         </label>
       </form>
    </div>
  );
}

export default App;
