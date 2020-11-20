import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import LogOut from "./components/Logout"
import LogIn from "./components/LogIn"
import "./App.css";
import { PrivateRoute } from './utils/PrivateRoute'
import {ListOfTrucks} from "./components/ListOfTrucks";


function App(){
	const logout = () => {
		localStorage.getItem('token') 
		? localStorage.removeItem('token') 
		: console.log('Error: Missing A Token');
	}

	const dynamicNav = (alternator, props) => {
		if(alternator === true) {
			return (
				localStorage.getItem('token') 
				? <li>{props}</li>
				: <div></div>
			)
		} else {
			return (
				localStorage.getItem('token') 
				? <div></div>
				: <li>{props}</li>
			)
		}
	}

	return (
		<div className="App">
			<h1>Food Truck Trackr</h1>
				<ul className="headerNav">
					{localStorage.getItem("token") && <li><Link to="/home">Home</Link></li>}
					{dynamicNav(false, <Link to="/signup">Sign Up</Link>)}
					{dynamicNav(false, <Link to="/login">Log In</Link>)}
					{dynamicNav(true, <Link to="/logout" onClick={logout}>Log Out</Link>)}
					{/* {dynamicNav(true, <Link to="/dinerprofile">Diner Profile</Link>)}
          {dynamicNav(true, <Link to="/operatorprofile">Operator Profile</Link>)} */}
				</ul>    
			<Switch>
				<Route path="/signup">
					<SignUp />
				</Route>
				<Route path="/logout">
					<LogOut />
				</Route>
				<Route path="/login">
					<LogIn />
				</Route>
				<Route path="/home">
					<ListOfTrucks />
				</Route>
				{/* <PrivateRoute path='/dinerprofile' Component={DinerProfile}/>
				<PrivateRoute path='/operatorprofile' Component={OperatorProfile}/> */}
			</Switch>
		</div>
	)
}

export default App;