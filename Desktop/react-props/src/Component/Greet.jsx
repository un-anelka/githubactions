import React from 'react'

const Greet = ({ name, subject, children, onClick }) => {
    // const Greet = (props) => {
    console.table({ name, subject })
    return (
        <div>
            <h1>
                HELLO {name}!
            </h1>
            <p>Your subject is {subject}</p>
            {children}
            <button onClick={onClick}>Click Now </button>
        </div>
    )
}

export default Greet