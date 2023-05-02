import React from "react"
import './MyButton.css'

const UpdatingTheScreenComponent = ({ count, onClick }) => {
    
    // const [count, setCount] = useState(0)

    // function clickFunction() {
    //     setCount(count+1)
    // }

    return(
        <> 
            <button className="button" onClick={onClick}>
                Clicked Me {count} times
            </button>
        </>
    )
}

export default UpdatingTheScreenComponent