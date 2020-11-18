import React from "react";
import { Redirect } from "react-router-dom";

class LogOut extends React.Component {
  state = {
    redirect: false
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 2000)
  }

  render() {
    return this.state.redirect
      ? <Redirect to="/login" />
      : <h2>Thank You For Using Food Truck Trackr!</h2>
  }
}

export default LogOut;