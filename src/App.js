import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import LogOut from "./components/Logout"
import LogIn from "./components/LogIn"
import DinerProfile from "./components/DinerProfile";
import "./App.css";


function App(){
	const logout = () => {
		localStorage.getItem('token') 
		? localStorage.removeItem('token') 
		: console.log('Error: Missing A Token');
	}
//     return (
//         <div className="App">
//         <h1>Food Truck Trackr</h1>
//             <ul className="headerNav">
//                 <li><Link to="/home">Home</Link></li>
//                 <li><Link to="/signup">Sign Up</Link></li>
//                 <li><Link to="/login">Log In</Link></li>
//                 <li><Link to="/logout">Log Out</Link></li>
//                 <li><Link to="/dinerprofile">Diner Profile</Link></li>
//             </ul>    
//         <Switch>
//         <Route path="/signup">
//         <SignUp />
//         </Route>
//         <Route path="/logout">
//         <LogOut />
//         </Route>
//         <Route path="/login">
//         <LogIn />
//         </Route>
//         <Route path="/dinerprofile">
//         <DinerProfile />
//         </Route>
//         </Switch>
//         </div>
//     )
// }




	return (
		<div className="App">
			<h1>Food Truck Trackr</h1>
				<ul className="headerNav">
					<li><Link to="/home">Home</Link></li>
					{localStorage.getItem('token') 
					? <div></div>
					: <li><Link to="/signup">Sign Up</Link></li>}
					{localStorage.getItem('token') 
					? <div></div>
					: <li><Link to="/login">Log In</Link></li>}
					{localStorage.getItem('token') 
					? <li><Link to="/logout" onClick={logout}>Log Out</Link></li>
					: <div></div>}
					{localStorage.getItem('token') 
					? <li><Link to="/dinerprofile">Diner Profile</Link></li>
					: <div></div>}
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
				<Route path="/dinerprofile">
        	<DinerProfile />
        </Route>
			</Switch>
		</div>
	)
}

export default App;