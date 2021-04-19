import React from 'react';
import axios from "axios";
import './Signup.css'
import Logo from "../Testseite/Logo";


class Signup extends React.Component {
    constructor() {
        super()
        this.state = {
            nachname: "",
            vorname: "",
            email: "",
            password: ""
        }
        this.changeNachname = this.changeNachname.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changepassword = this.changepassword.bind(this)
        this.changeVorname = this.changeVorname.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onSubmit(event) {
        event.preventDefault()
        const registered = {
            nachname: this.state.nachname,
            vorname: this.state.vorname,
            email: this.state.email,
            password: this.state.password
        }
        axios.post("/signup", registered).then((response) => {
            console.log(response.data)
            this.setState({
                nachname: "",
                vorname: "",
                email: "",
                password: ""
            })
        })
    }
    changeNachname(event) {
        this.setState({ nachname: event.target.value })
    }
    changeVorname(event) {
        this.setState({ vorname: event.target.value })
    }
    changeEmail(event) {
        this.setState({ email: event.target.value })
    }
    changepassword(event) {
        this.setState({ password: event.target.value })
    }
    render() {
        return (
            <div className="container-sign">
                <Logo />
                <div className="form-div">
                    <form onSubmit={this.onSubmit}>
                        <input type="text" placeholder="Nachname"
                            onChange={this.changeNachname}
                            value={this.state.nachname}
                            className="form-control form-group"
                        />
                        <input type="text" placeholder="Vorname"
                            onChange={this.changeVorname}
                            value={this.state.vorname}
                            className="form-control form-group"
                        />
                        <input type="text" placeholder="Email"
                            onChange={this.changeEmail}
                            value={this.state.email}
                            className="form-control form-group"
                        />
                        <input type="password" placeholder="password"
                            onChange={this.changepassword}
                            value={this.state.password}
                            className="form-control form-group"
                        />
                        <input type="submit" className="btn btn-danger btn-block" value="SignUp" />
                    </form>
                </div>
            </div>
        )
    }
}

export default Signup