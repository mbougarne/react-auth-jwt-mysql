import React, { useState, useEffect } from 'react'
import { getAdminBoard } from '../../services/User'

export default function BoardAdmin() {

    let [content, setContent] = useState('')

    useEffect( () => {
        
        getAdminBoard()
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
                <h1>Admin Page</h1>
                <p className="lead">
                    {content}
                </p>
            </div>
        </div>
    )

}