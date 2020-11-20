import React from "react";
import { Switch, Link, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import LogOut from "./components/Logout"
import LogIn from "./components/LogIn"
import "./App.css";
import { PrivateRoute } from './utils/PrivateRoute'
import { NewTruck } from './components/NewTruck'
import {ListOfTrucks} from "./components/ListOfTrucks";
import { ContextObject } from './contexts/context'


function App(){
	const logout = () => {
		localStorage.removeItem('token') 
		localStorage.removeItem('userID')
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
			<ContextObject.Provider value={{
				test: 'test'
			}}>
				<h1>Food Truck Trackr</h1>
					<ul className="headerNav">
						{dynamicNav(false, <Link to="/signup">Sign Up</Link>)}
						{dynamicNav(false, <Link to="/login">Log In</Link>)}
						{dynamicNav(true, <Link to="/home">Home</Link>)}
						{dynamicNav(true, <Link to="/logout" onClick={logout}>Log Out</Link>)}
						{dynamicNav(true, <Link to="/newtruck">List a Truck</Link>)}
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
					<PrivateRoute path="/home" Component={ListOfTrucks}/>
					<PrivateRoute path='/newtruck' Component={NewTruck}/>
				</Switch>
			</ContextObject.Provider>
		</div>
	)
}

export default App;