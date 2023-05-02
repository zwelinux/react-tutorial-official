import React from 'react'
import './userInfo.css'

const userInfo = {
    userName : 'Alexander Hipp',
    imageUrl : 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    email : 'alexanderhipp@gmail.com',
}

const UserInfo = () => {
    return(
        <div className="card">
            <img src={userInfo.imageUrl} alt="Avatar" className='userInfoImage' />
            <div className="container">
                <h4><b>{userInfo.userName}</b></h4> 
                <p>{userInfo.email}</p> 
            </div>
        </div>
    )
}

export default UserInfo