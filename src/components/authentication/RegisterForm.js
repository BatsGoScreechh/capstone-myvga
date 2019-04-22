import React, {Component} from "react"
import "./Login.css"
import register from "./register.png"
export default class RegisterForm extends Component {
    //creates new state

    state = {
        username: "",
        email: "",
        password: "",
        errorMessage: ""
    }

    //Handles form imputs and sets them to state

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange)
    }

    //Checks to see if username or password are already in database. If in database, they will receive an alert and not be able to create an account, otherwise, their information will be posted to the database and they will be logged in with session storage

    createNewUser = evt => {
        evt.preventDefault()
        let errorMessage = ""
        this.props.checkName(this.state.username).then(user => {
                if(user.length === 0){
                    this.props.checkEmail(this.state.email).then(user => {
                        if(user.length ===0){
                            const newUser = {
                                username: this.state.username,
                                email: this.state.email,
                                password: this.state.password
                            }
                            console.log(newUser)
                        this.props.addUser(newUser).then(newUser => {
                            sessionStorage.setItem("activeUser", newUser.id)
                            this.props.mountUponLogin()
                            this.props.history.push("/my-games")
                        })
                        } else {
                            errorMessage = "That email is already registered. Please register with a new email!"
                            this.setState({
                                errorMessage: errorMessage
                            })

                    }})
                } else {
                errorMessage = "That username is already taken. Please enter a different username!"
                this.setState({
                    errorMessage: errorMessage
                })
            }
        })
    }



    //Returns form and/or error message
    render(){
        return(
            <React.Fragment>
                <div className="login-container">
            <img src={register} alt="register" className="register"></img>
            <form>
            <div className="form-group">
                <input type="text" className="form-login" id="username" placeholder="User Name" onChange={this.handleFieldChange}/>
            </div>
            <div className="form-group">
                <input type="email" className="form-login" id="email" placeholder="Email Address" onChange={this.handleFieldChange}/>
            </div>
            <div className="form-group">
                <input type="password" className="form-login" id="password" placeholder="Password" onChange={this.handleFieldChange}/>
            </div>
            <button type="submit" className="btn" onClick={this.createNewUser}>Register</button>
            </form>
            <h4>{this.state.errorMessage}</h4>
            </div>
            </React.Fragment>

        )
    }
}