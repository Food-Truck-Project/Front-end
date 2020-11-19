import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

const LogOut = () => {
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    setTimeout(() => setRedirect(true), 2000)
  }, [])
  return (
    redirect
    ? <Redirect to="/login" /> 
    : <h2>Thank You For Using Food Truck Trackr!</h2>
  )
} 

export default LogOut;