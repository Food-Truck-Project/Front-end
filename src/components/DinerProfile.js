import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import axios from "axios";
import "../dinerForm.css";
import { useHistory } from 'react-router-dom'

const initialValues = {
	id: '',
	usename: '',
	email: ''
}

function DinerProfile(){
	const [diner, setDiner] = useState(initialValues)

	useEffect(() => {
		axios.get("https://trucktackert.herokuapp.com/api/users")
			.then (res => {
				console.log(res.data[0])
				setDiner({
					...diner,
					id: res.data[0].id
				})
			})
			.catch (err => console.log(err))
	}, [])

	const [dinerForm, setDinerForm]=useState({
		currentLocation: "",
		favoriteTrucks: [],
	})


	const handleDinerChange= event => {
    event.persist();
    const newDinerFormData = {
      ...dinerForm,
      [event.target.name]:
        event.target.type === "checkbox" ? event.target.checked : event.target.value
    };
    setDinerForm(newDinerFormData);
  };

    return (
        <div className="dinerForm">
            <form>
                <h2>My Profile</h2>

                {/*diner role*/}
                <label htmlFor="role">Role:
                    <input type="text" name="role" value={diner.id} onChange={handleDinerChange} />
                </label>

                  {/*diner username*/}
                <label htmlFor="username">Username:
                    <input type="text" name="username" onChange={handleDinerChange} />
                </label>

                  {/*diner email*/}
                <label htmlFor="email">Email:
                    <input type="email" name="email" onChange={handleDinerChange}  />
                </label>

                  {/*diner password*/}
                <label htmlFor="username">Password:
                    <input type="password" name="username" onChange={handleDinerChange} />
                </label>

                {/*diner current location*/}
                <label htmlFor="currentLocation">Current Location:
                    <input type="text" name="currentLocation" onChange={handleDinerChange}  />
                </label>

                {/*diner favorite trucks*/}
                <label htmlFor="favoriteTrucks">My Favorite Food Trucks:
                    <input type="text" name="favoriteTrucks" value={dinerForm.favoriteTrucks} onChange={handleDinerChange}  />
                </label>
            </form>
        </div>
    )
}






export default DinerProfile;