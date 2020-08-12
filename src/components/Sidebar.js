import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import { getCurrentUser, Logout } from '../services/Auth'

export default function Sidebar()
{

    let [moderatorBoard, setModeratorBoard] = useState(false) 
    let [adminBoard, setAdminBoard] = useState(false) 
    let [currentUser, setCurrentUser] = useState() 

    useEffect( () => {

        let user = getCurrentUser()
        
        if(user)
        {
            setCurrentUser(user)
            setModeratorBoard(user.roles.includes('ROLE_MODERATOR'))
            setAdminBoard(user.roles.includes('ROLE_ADMIN'))
        }

    }, [])

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <ul className="navbar-nav" style={{flexDirection: 'row'}}>
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
                    {/* Admin */}
                    { adminBoard && (
                        <li className="nav-item mr-2">
                            <NavLink 
                                className="nav-link" 
                                activeClassName="active"
                                exact to="/admin">
                                Admin
                            </NavLink>
                        </li>
                    )}
                    {/* Moderator */}
                    { moderatorBoard && (
                        <li className="nav-item mr-2">
                            <NavLink 
                                className="nav-link" 
                                activeClassName="active"
                                exact to="/moderator">
                                Moderator
                            </NavLink>
                        </li>
                    )}
                    {/* Current User */}
                    { currentUser && (
                        <li className="nav-item mr-2">
                            <NavLink 
                                className="nav-link" 
                                activeClassName="active"
                                exact to="/user">
                                User
                            </NavLink>
                        </li>
                    )}
                    </ul>

                    { currentUser ? (
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item mr-2">
                                <NavLink 
                                    className="nav-link" 
                                    activeClassName="active"
                                    exact to="/profile">
                                    {currentUser.username}
                                </NavLink>
                            </li>

                            <li className="nav-item mr-2">
                                <button 
                                    className="btn btn-sm btn-danger"
                                    onClick={e => Logout()}>
                                    Logout
                                </button>
                            </li>
                        </ul>

                    ) : (
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item mr-2">
                                <NavLink 
                                    className="nav-link"
                                    activeClassName="active"
                                    exact to="/login">
                                    Login
                                </NavLink>
                            </li>
                            
                            <li className="nav-item mr-2">
                                <NavLink 
                                    className="nav-link"
                                    activeClassName="active"
                                    exact to="/register">
                                    Sign Up
                                </NavLink>
                            </li>
                        </ul>
                    )}
            </div>
        </nav>
    )
}
