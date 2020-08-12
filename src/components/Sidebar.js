import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Sidebar()
{
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <ul className="navbar-nav ml-auto" style={{flexDirection: 'row'}}>
                    {/* Home */}
                    <li className="nav-item mr-2">
                        <NavLink 
                            className="nav-link" 
                            activeClassName="active"
                            exact to="/">
                            Home 
                            <span className="sr-only">(current)</span>
                        </NavLink>
                    </li>
                    {/* Login */}
                    <li className="nav-item mr-2">
                        <NavLink 
                            className="nav-link"
                            activeClassName="active"
                            exact to="/login">
                            Login
                        </NavLink>
                    </li>
                    {/* Sign Up */}
                    <li className="nav-item mr-2">
                        <NavLink 
                            className="nav-link"
                            activeClassName="active"
                            exact to="/register">
                            Sign Up
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
