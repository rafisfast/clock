import React, {Component, useState} from 'react';

function Needle() {
    return (
        <div className="main-needle">

        </div>
    )
}

function Base() {
    return (
       <div className="base">
           <Needle />
       </div>
    )
}

function App() {

return(
    <div>
        <Base />
    </div>
    )
}

export default App