import React from 'react'

import Form from '../components/LoginForm'

export default function Login() {

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Login to Your Account</h1>
                </div>
            </div>
            {/* Form */}
            <Form />
        </div>
    )

}