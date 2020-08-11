import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Sidebar()
{
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <button className="navbar-toggler" type="button">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {/* Home */}
                        <NavLink 
                            className="nav-link" 
                            activeClassName="active"
                            to="/"
                            >
                            Home 
                            <span className="sr-only">(current)</span>
                        </NavLink>
                        {/* Login */}
                        <NavLink 
                            className="nav-link"
                            activeClassName="active"
                            to="/login"
                            >
                            Login
                        </NavLink>
                        {/* Sign Up */}
                        <NavLink 
                            className="nav-link"
                            activeClassName="active"
                            to="/register"
                            >
                            Sign Up
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}
