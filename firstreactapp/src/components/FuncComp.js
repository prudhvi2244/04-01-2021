import React from 'react'

function FuncComp(props) {
    return (
        <div>
            <h2>Welcome To Functional Componenet</h2>
            <h2>Name : {props.name} - City : {props.city}</h2>
        </div>
    )
}

export default FuncComp
