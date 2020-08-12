import React, { useState, useEffect } from 'react'
import { getUserBoard } from '../../services/User'

export default function BoardUser() {

    let [content, setContent] = useState('')

    useEffect( () => {
        
        getUserBoard()
        .then(res => res.json())
        .then(data => data.success && setContent(data.message))
        .catch(error => {
    
            let errorContent = (error.response && error.response.data && error.response.data.message) 
                                || error.message || error.toString()
            setContent(errorContent)
        })
        
    }, [])


    return (
        <div className="container">
            <div className="jumbotro">
                <h1>User Page</h1>
                <p className="lead">
                    {content}
                </p>
            </div>
        </div>
    )

}