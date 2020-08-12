import React, { useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import CheckButton from 'react-validation/build/button'

import { Signup as RegisterService } from '../services/Auth'

import { requiredInput, validateEmail, validatePassword, validateUsername } from './ValidationInputs'
import AlertMessage from './AlertMessage'

export default function SignupForm()
{
    let history = useHistory()
    let form = useRef()
    let checkButton = useRef()
  
    let [username, setUsername] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [successful, setSuccessful] = useState(false);
    let [message, setMessage] = useState('');

    const onUsernameChanged = e => setUsername(e.target.value)
  
    const onEmailChanged = e => setEmail(e.target.value)
  
    const onPasswordChanged = e => setPassword(e.target.value)
  
    const onRegister = e => {
      e.preventDefault();
  
      setMessage('');
      setSuccessful(false);
  
      form.current.validateAll();
  
      if (checkButton.current.context._errors.length === 0) {

        RegisterService(username, email, password)
        .then( response => {
            console.log(response)
            setMessage(response.message);
            setSuccessful(true);
            history.push('/login')
          }
        ).catch(error => {
            const resMessage =
              ( error.response && error.response.message) 
              || 
              error.message 
              || 
              error.toString()
  
            setMessage(resMessage)
            setSuccessful(false)
        })

      }
    }

    return (
        <div className="row">
            <div className="col-md-6 mx-auto">
                <div className="card">
                    {/* Card header */}
                    <div className="card-header">
                        <h5>Create an Account</h5>
                    </div>
                    {/* Form */}
                    <Form onSubmit={onRegister} ref={form}>
                        {!successful && (
                            <div>
                                {/* Card body */}
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <Input
                                            type="text"
                                            className="form-control"
                                            name="username"
                                            id="username"
                                            value={username}
                                            onChange={onUsernameChanged}
                                            validations={[requiredInput, validateUsername]}
                                            required/>
                                    </div>
                    
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <Input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            id="email"
                                            value={email}
                                            onChange={onEmailChanged}
                                            validations={[requiredInput, validateEmail]}
                                            required/>
                                    </div>
                    
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <Input
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            id="password"
                                            value={password}
                                            onChange={onPasswordChanged}
                                            validations={[requiredInput, validatePassword]}
                                            required/>
                                    </div>
                                </div>
                                {/* Card footer */}
                                <div className="card-footer">
                                    <div className="form-group">
                                        <button className="btn btn-primary btn-block">Sign Up</button>
                                    </div>
                                </div>
                            </div>
                        )}
                            
                        {
                            message && (
                                <AlertMessage message={message} success={successful} />
                            )
                        }
                        <CheckButton style={{ display: "none" }} ref={checkButton} />
                    </Form>
                </div>
            </div>
        </div>
    );
}
