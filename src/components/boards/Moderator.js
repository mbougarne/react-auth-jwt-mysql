import React, { useState, useEffect } from 'react'
import { getModeratorBoard } from '../../services/User'

export default function BoardModerator() {

    let [content, setContent] = useState('')

    useEffect( () => {
        
        getModeratorBoard()
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
                <h1>Moderator Page</h1>
                <p className="lead">
                    {content}
                </p>
            </div>
        </div>
    )

}