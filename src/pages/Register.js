import React from 'react'

import SignupForm from '../components/SignupForm'

export default function Register() {

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Create An Account</h1>
                </div>
            </div>
            {/* Form */}
            <SignupForm/>
        </div>
    )

}