import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import "../App.css";
export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="divBoton">
          <Link
            to="/auth/login"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div>
              <strong>Login</strong>
            </div>
          </Link>
          <div>
            <Link
              to="/auth/signup"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div>
                <strong>Signup</strong>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
