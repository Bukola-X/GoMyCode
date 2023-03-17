import React, {Component} from "react"
import ChildHandleName from "./Child-HandleName"; 
//import Profile from "./Profile";


class ParentHandleName extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "Akinjide Bukola"
        }
        this.greetName = this.greetName.bind(this)
    }

    greetName = () => {alert(`Hello, My name is ${this.state.name}`)}
    render() {
        return(
            <div>
                <ChildHandleName greethandler = {this.greetName}></ChildHandleName>
            </div>
        )
    }
}

export default ParentHandleName;