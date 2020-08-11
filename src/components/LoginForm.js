import React, { useState, useRef} from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import CheckButton from 'react-validation/build/button'

import { Login as LoginService } from '../services/Auth'


const requiredInput = value => {
    if (!value)
    {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        )
    }
}

export default function LoginForm()
{
    let history = useHistory()
    let location = useLocation()

    let form = useRef()
    let checkButton = useRef()


    let [username, setUsername] = useState('')
    let [password, setPassword] = useState('')
    let [loading, setLoading] = useState(false)
    let [message, setMessage] = useState('')

    const onUsernameChange = e => setUsername(e.target.value)

    const onPasswordChange = e => setPassword(e.target.value)

    const onLogin = e => {
        e.preventDefault();
        
        setMessage('')
        setLoading(true)

        form.current.validateAll()

        if (checkButton.current.context._errors.length !== 0) 
        {
            LoginService(username, password)
            .then(user => {

                history.push("/profile");
                location.reload();
                console.log(user)

            }).catch(error => {
                console.log(error)

                const resMessage =
                  (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                  error.message ||
                  error.toString();
      
                setLoading(false);
                setMessage(resMessage);

            })

        } else {

            setLoading(false);
            
        }

    }

    return (
        <div className="row">
            <div className="col-md-6 mx-auto">
                <div className="card">
                    <div className="card-header bg-white border-0">
                        <h5 className="font-weight-bold">
                            Login to your account
                        </h5>
                    </div>
                    {/* Form */}
                    <Form onSubmit={onLogin} ref={form}>
                        <div className="card-body">
                            {/* Username */}
                            <div className="form-group">
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="username"
                                    value={username}
                                    onChange={onUsernameChange}
                                    validations={[requiredInput]}  
                                />
                            </div>
                            {/* Password */}
                            <div className="form-group">
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="password"
                                    value={password}
                                    onChange={onPasswordChange}
                                    validations={[requiredInput]}  
                                />
                            </div>
                        </div>
                        {/* Footer */}
                        <div className="card-footer">
                            <div className="form-group">
                                <button className="btn btn-primary btn-block" disabled={loading}>
                                {loading && (
                                    <span className="spinner-border spinner-border-sm"></span>
                                )}
                                <span>Login</span>
                                </button>
                            </div>

                            {message && (
                                <div className="form-group">
                                <div className="alert alert-danger" role="alert">
                                    {message}
                                </div>
                                </div>
                            )}
                            <CheckButton style={{ display: "none" }} ref={checkButton} />
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}