import React from 'react'

export default function AlertMessage(props)
{
    return (
        <div className="form-group">
            <div className={ props.success ? "alert alert-success" : "alert alert-danger" } role="alert"> 
                {props.message} 
            </div>
        </div>
    )
}