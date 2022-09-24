import React from 'react'

function Welcome(prop) {
    return (
        <div>
            <h1>welcome {prop.name}</h1>
            <h2>branch {prop.branch}</h2>
 
            <p>from {prop. clg}</p>
        </div>
    );
}

function Prop() {
    return (
        <Welcome name='sham' branch='ece' clg='mitk' />   
    )
}

export default Prop