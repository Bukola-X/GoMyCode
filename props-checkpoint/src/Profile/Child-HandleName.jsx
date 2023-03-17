import React from "react"

const ChildHandleName = (props) => {
    return(
        <div>
            <button onClick = {() => {props.greethandler()}}>Implement Function</button>
        </div>
    )
}

export default ChildHandleName;