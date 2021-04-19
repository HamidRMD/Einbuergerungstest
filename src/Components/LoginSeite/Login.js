import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../Testseite/Logo';
import './Login.css'
import axios from "axios"

            
class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: ""
        }
        this.changeEmail = this.changeEmail.bind(this)
        this.changepassword = this.changepassword.bind(this)
        this.login = this.login.bind(this)
    }
    changeEmail(event) {
        this.setState({ email: event.target.value })
    }
    changepassword(event) {
        this.setState({ password: event.target.value })
    }
    login(event) {
        event.preventDefault()
        console.log("login=")
        /*this.setState({
               
            email: this.state.email,
            password: this.state.password
        })
        // alert(`Hallo ${this.state.email}`);
        */
        const registered = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post("/login", registered).then((response) => {
            console.log(response.data)
           // alert("Du bist eingeloggt!")
            this.setState({
                email: "",
                password: ""
            })
        })
    }

    render() {
        return (
            
            <div>
            <Logo />
            <div className="container-login">
                <div className="form-div">
                    <form action="#" method="post">
                        <input type="text" placeholder="Enter Your Email"
                            onChange={this.changeEmail}
                            value={this.state.email}
                            className="form-control form-group"
                        />
                        <input type="password" placeholder=" Enter Your Password"
                            onChange={this.changepassword}
                            value={this.state.password}
                            className="form-control form-group"
                        />
                        <button className="login-button" onClick={this.login} className="btn btn-danger btn-block">Login</button>
                        <p>Noch nicht angemeldet?</p>
                        <li> <Link to={'/Signup'}>Signnp Hier</Link></li>
                    </form>
                </div>
            </div>
            <button><Link to={"/Bewertung"}>Weiter zum Test</Link></button>

            </div>
        )
    }
}

export default Login;
            
 
