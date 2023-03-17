import React, {Component} from "react"
//import { Children } from "react";
import PropTypes from "prop-types"

class Profile extends Component {
    
    render() {
        const {fullName, bio, profession} = this.props
        return(
            <div>
                <p>My name is {fullName}, I am a {bio}, taking a course in {profession}.</p>
                {this.props.children}
            </div>
        )
    }
}

Profile.propTypes = { 
    fullName : PropTypes.string,
    bio : PropTypes.string,
    profession : PropTypes.string
}

Profile.defaultProps = {
    fullName : "Lanre",
    bio : "Business Manager",
    profession : "Business Development"
}

export default Profile;