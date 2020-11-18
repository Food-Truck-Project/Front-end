import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import axios from "axios";
import "../operatorForm.css";



function OperatorProfile(){


    //using axios get to grab all diners and return their individual info within an object
const operators=axios
.get("https://trucktackert.herokuapp.com/api/users")
.then (function(res){
    operators.map(function(operator){
        if (operator.role==="2"){
        return {
            Role: operator.role,
            Username: operator.username,
            email: operator.email,
            password: operator.password
        }
    } // closing out if statement 
    }) //closing out map
})
.catch (function(err){
    console.log(err);
})

//creating state for operator location and favorite trucks
const [operatorForm, setOperatorForm]=useState({
        currentLocation: "",
        trucksOwned: [],
    })

//event handler for input changes   
const handleOperatorChange= event => {
    event.persist();
    const newOperatorFormData = {
      ...operatorForm,
      [event.target.name]:
        event.target.type === "checkbox" ? event.target.checked : event.target.value
    };
    setOperatorForm(newOperatorFormData);
  };

    return (
        <div className="operatorForm">
            <form>
                <h2>My Profile</h2>

                {/*operator role*/}
                <label htmlFor="role">Role:
                    <input type="text" name="role" value={operators.role} onChange={handleOperatorChange} />
                </label>

                  {/*operator username*/}
                <label htmlFor="username">Username:
                    <input type="text" name="username" value={operators.username} onChange={handleOperatorChange} />
                </label>

                  {/*operator email*/}
                <label htmlFor="email">Email:
                    <input type="email" name="email" value={operators.email} onChange={handleOperatorChange}  />
                </label>

                  {/*operator password*/}
                <label htmlFor="username">Password:
                    <input type="password" name="username" value={operators.password} onChange={handleOperatorChange} />
                </label>

                {/*operator current location*/}
                <label htmlFor="currentLocation">Current Location:
                    <input type="text" name="currentLocation" value={operatorForm.currentLocation} onChange={handleOperatorChange}  />
                </label>

                {/*operator trucks*/}
                <label htmlFor="trucksOwned">My Food Trucks:
                    <input type="text" name="trucksOwned" value={operatorForm.trucksOwned} onChange={handleOperatorChange}  />
                </label>
            </form>
        </div>
    )
}






export default OperatorProfile;