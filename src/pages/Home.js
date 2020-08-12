import React, { useState, useEffect} from 'react'
import { getPublicContent } from '../services/User'

export default function Home() {

    let [content, setContent] = useState('')

    useEffect( () => {
        getPublicContent()
        .then(res => {
            console.log(res)
            // setContent(res)
        })
        .catch(error => {
            let errorContent = (error.response && error.response.data) || error.message || error.toString()
            setContent(errorContent)
        })

    }, [])

    return (
        <div className="container">
            <div className="jumbotro">
                <h1>Welcome Home</h1>
                <p className="lead">
                    {content}
                </p>
            </div>
        </div>
    )

}