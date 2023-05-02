import React from 'react'
import './MyButton.css'

const MyButton = () => {
    return(
        <>
            <button onClick={() => alert("Clicked!")} className='button'>
                Click Me
            </button>
        </>
    )
}

export default MyButton