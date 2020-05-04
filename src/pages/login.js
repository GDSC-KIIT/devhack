import React, { Component } from "react"
import Loader from "react-loader-spinner"
import Helmet from "react-helmet"

import SEO from "../components/seo"
import Navbar from "../components/navbar/Navbar"
import Dashboard from "../components/dashboard/Dashboard"
import firebase from "../components/firebase"
import "firebase/auth"

import './css/login.css'

export class LoginPage extends Component {
    state = {
        spinnerLoading: false,
        loggedIn: false,
        email: "",
        password: "",
    }

    // Updates email and password on every keystroke
    handleEmailChange = e => {
        this.setState({
            email: e.target.value,
        })
    }

    handlePasswordChange = e => {
        this.setState({
            password: e.target.value,
        })
    }

    submitLoginForm = e => {
        e.preventDefault()

        this.setState({
            spinnerLoading: true,
        })

        const auth = firebase.auth()
        
        auth.signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                this.setState({
                    spinnerLoading: false,
                    loggedIn: true
                });
            })
            .catch(err => {
                alert(err.message)
                this.setState({
                    spinnerLoading: false,
                });
            });
    }

    render() {
        if(this.state.loggedIn) {
            return (<Dashboard email={this.state.email} password={this.state.password}></Dashboard>)
        }
        
        else{
            return (
                <div>
                    <Helmet>
                        <link
                            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap"
                            rel="stylesheet"
                        ></link>
    
                        <link
                            rel="stylesheet"
                            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                            crossorigin="anonymous"
                        ></link>
                        <link
                            rel="stylesheet"
                            href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
                        ></link>
    
                        <script
                            src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
                            integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
                            crossorigin="anonymous"
                        ></script>
                        <script
                            src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
                            integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
                            crossorigin="anonymous"
                        ></script>
                        <script
                            src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
                            integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
                            crossorigin="anonymous"
                        ></script>
                    </Helmet>
    
                    <SEO title="Login to DevHack"></SEO>
                    <Navbar></Navbar>
                    <div className="container loginform">
                        <h1 style={headerStyle}>Login to your devhack Team Account</h1>

                        <h6 style={noteStyle}>NOTE: Account Credentials will be sent to team leads via email on 26th April 2020.</h6>
                        
                        <br></br>
                        
                        <form
                            style={formStyle}
                            onSubmit={this.submitLoginForm}
                        >
                            <div className="form-group">
                                <label>Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    onChange={this.handleEmailChange}
                                    aria-describedby="emailHelp"
                                    required
                                ></input>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    onChange={this.handlePasswordChange}
                                    required
                                ></input>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Login
                            </button>
                        </form>
    
                        <div style={{ marginTop: "2rem" }}>
                            <Loader
                                type="Puff"
                                color="#00BFFF"
                                height={60}
                                width={60}
                                visible={this.state.spinnerLoading}
                            />
                            <br></br>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

const headerStyle = {
    marginTop: "5rem",
    marginBottom: "2rem",
}

const formStyle = {
    padding: "0rem",
}

const noteStyle = {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 300
}

export default LoginPage
