import React from 'react'

const ConditionalRenderingComponent = () => {

    let userStatus = 'online'
    let message
    if (userStatus === 'online') {
        message = 'Welcome Dear User'
    } else {
        message = 'Welcome New User'
    }
    

    return(
        <>
            {message}
            <br />
            {userStatus ? 'Nice To Meet You' : "Let's Start!"}
        </>
    )
}

export default ConditionalRenderingComponent;