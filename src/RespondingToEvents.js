import React from 'react'
import './MyButton.css'

const RespodingToEvents = () => {

    function ButtonClickAction() {
        alert('Oh You Clicked Me!')
    }

    return(
        <>
            <button onClick={ButtonClickAction} className='button'>
                Click Me
            </button>
        </>
    ) 
}

export default RespodingToEvents