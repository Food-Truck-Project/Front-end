import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import axios from "axios";
import "../dinerForm.css";



function DinerProfile(){


    //using axios get to grab all diners and return their individual info within an object
const diners=axios
.get("https://trucktackert.herokuapp.com//api/users")
.then (function(res){
    diners.map(function(diner){
        if (diner.role==="1"){
        return {
            Role: diner.role,
            Username: diner.username,
            email: diner.email,
            password: diner.password
        }
    } // closing out if statement 
    }) //closing out map
})
.catch (function(err){
    console.log(err);
})

//creating     
const [dinerForm, setDinerForm]=useState({
        currentLocation: "",
        favoriteTrucks: [],
    })


    return (
        <div className="dinerForm">
            <form>
                <h2>My Profile</h2>

                {/*diner role*/}
                <label htmlFor="role">Role:
                    <input type="text" name="role" value={diners.role}  />
                </label>

                  {/*diner username*/}
                <label htmlFor="username">Username:
                    <input type="text" name="username" value={diners.username}  />
                </label>

                  {/*diner email*/}
                <label htmlFor="email">Email:
                    <input type="email" name="email" value={diners.email}  />
                </label>

                  {/*diner password*/}
                <label htmlFor="username">Password:
                    <input type="password" name="username" value={diners.password}  />
                </label>

                {/*diner current location*/}
                <label htmlFor="currentLocation">Current Location:
                    <input type="text" name="currentLocation" value={dinerForm.currentLocation}  />
                </label>

                {/*diner favorite trucks*/}
                <label htmlFor="favoriteTrucks">My Favorite Food Trucks:
                    <input type="text" name="favoriteTrucks" value={dinerForm.favoriteTrucks}  />
                </label>
            </form>
        </div>
    )
}






export default DinerProfile;