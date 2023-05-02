import React from 'react'
import MyButton from './MyButton'
import './App.css'
import UserInfo from './userInfo'
import ConditionalRenderingComponent from './conditionalRenderingComponent'
import RenderingListComponent from './RenderingListComponent'
import RespodingToEvents from './RespondingToEvents'
import UpdatingTheScreenComponent from './UpdatingTheScreeComponent'
import { useState } from 'react'


const App = () => {

  const [count, setCount] = useState(0)

  function clickFunction() {
      setCount(count+1)
  }

  return(
    <div className='main'>
      <h2>React 80% Coverage</h2>
      <hr />
        <p>Button Component</p>
        <MyButton />
      <br /><br />
      <hr />
        <p>User Info Profile Component</p>
        <UserInfo />
      <br /><br />
      <hr />
        <p>Conditional Rendering Component</p>
        <ConditionalRenderingComponent />
      <br /><br />
      <hr />
        <p>Rendering Lists</p>
        <RenderingListComponent />
      <br /><br />
      <hr /> 
        <p>Responding to Events</p>
        <RespodingToEvents />
      <br /><br />
      <hr />
        <p>Updating The Screen</p>
        <InternalCountButton />
      <br /><br />
      <hr />
        <p>Using Hooks</p>
        <UpdatingTheScreenComponent count={count} onClick={clickFunction} />
        <UpdatingTheScreenComponent count={count} onClick={clickFunction} />
      <br /><br />















      <br /><br /><br />
    </div>
  )
}




const InternalCountButton = () => {

  const [internalCount, setInternalCount] = useState(0)
 
  function internalCountButtonAction() {
    setInternalCount(internalCount+1)
  }

  return(
    <>
      <button className='button' onClick={internalCountButtonAction}>Internal Count {internalCount}</button>
    </>
  )
}

export default App 