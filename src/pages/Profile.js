import React, { useState } from 'react'

import { getCurrentUser } from '../services/Auth'

export default function Profile() {

    let [showToken, setShowToken] = useState('')
    let User = getCurrentUser()

    let rolesUi = User.roles && User.roles.map((role, i) => <span key={i}>{role}</span>)

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Welcome to Your Profile</h1>
                </div>
            </div>
            <ul className="list-group">
                <li className="list-group-item">
                    <strong>Username:</strong> 
                    {User.username}
                </li>
                <li className="list-group-item">
                    <strong>Email:</strong> 
                    {User.email}
                </li>
                <li className="list-group-item">
                    <strong>Authorities:</strong><br/>
                    { rolesUi }
                </li>
                <li className="list-group-item">
                    <strong>Access Token:</strong> <br/>
                    <button 
                        className="btn btn-primary btn-sm btn-round"
                        onClick={e => setShowToken(showToken = !showToken)}>
                        Show Token
                    </button>
                    { showToken && ( <p>{User.accessToken}</p> ) }
                </li>
            </ul>
        </div>
    )
}