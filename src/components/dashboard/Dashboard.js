import React, { Component } from "react"
import Helmet from "react-helmet"
import Loader from "react-loader-spinner"

import SEO from "../seo"
import Navbar from "../navbar/Navbar"
import firebase from "../firebase"
import "firebase/auth"
import "firebase/database"

import "./dashboard.css"
export class Dashboard extends Component {
    state = {
        teamdata: {},
        problem_statements: [],
        loaded: false,
        submission_link: "",
    }

    auth = firebase.auth()
    db = firebase.database()

    // Login and load up the team data in the state
    componentDidMount() {
        const email = this.props.email
        const password = this.props.password

        this.auth
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                const uid = this.auth.currentUser.uid

                this.db.ref(`teamdata/${uid}`).on("value", snapshot => {
                    this.setState({
                        teamdata: snapshot.val(),
                    })

                    this.db
                        .ref(`problem_statements/${this.state.teamdata.domain}`)
                        .once("value")
                        .then(snapshot => {
                            this.setState({
                                problem_statements: snapshot.val(),
                                loaded: true,
                            })
                        })
                        .catch(err => {
                            alert(err.messge)
                        })
                })
            })
            .catch(err => {
                alert(err.message)
            })
    }

    // check if the string passed is a valid URL or not
    validateURL = str => {
        let pattern = new RegExp(
            "^(https?:\\/\\/)?" + // protocol
            "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
            "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
            "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
            "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
                "(\\#[-a-z\\d_]*)?$",
            "i"
        ) // fragment locator
        return !!pattern.test(str)
    }

    // set submission link to input
    handleLinkChange = e => {
        this.setState({
            submission_link: e.target.value,
        })
    }

    // get the link and update the database
    receiveSubmission = e => {
        e.preventDefault()

        if (this.validateURL(this.state.submission_link)) {
            const uid = this.auth.currentUser.uid
            this.db
                .ref(`teamdata/${uid}`)
                .update({
                    git_repo_link: this.state.submission_link,
                    submission_time_stamp: new Date().toString(),
                })
                .then(() => {
                    alert("Submission Successful")
                })
        } else {
            alert("Please enter a valid URL")
        }
    }

    castVote = n => {
        const uid = this.auth.currentUser.uid
        this.db
            .ref(`vote_data/${this.state.teamdata.domain}/${uid}`)
            .set(n)
            .then(() => {
                alert(`Vote Casted Successfully for Problem Statement ${n}`)
            })
            .catch(err => {
                alert(err.message)
            })
    }

    submitVotingForm = e => {
        e.preventDefault()
        console.log("submitted")

        let r0 = document.getElementById("r0").checked
        let r1 = document.getElementById("r1").checked
        let r2 = document.getElementById("r2").checked
        let r3 = document.getElementById("r3").checked

        if (r0) {
            this.castVote(1)
        } else if (r1) {
            this.castVote(2)
        } else if (r2) {
            this.castVote(3)
        } else if (r3) {
            this.castVote(4)
        } else {
            alert("Please select an option")
        }
    }

    // startTimer = () => {
    //     let launchDate = new Date("April 27, 2020 10:00:00").getTime()

    //     let x = setInterval(() => {
    //         let now = new Date().getTime()
    //         let timeLeft = launchDate - now

    //         let hours = Math.floor(
    //             (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    //         )
    //         let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
    //         let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)

    //         if(document.getElementById("dashboardTimer") != null){
    //             document.getElementById("dashboardTimer").innerHTML =
    //                 hours + " HRS " + minutes + " MIN " + seconds + " S"

    //             // If the count down is finished, write some text
    //             if (timeLeft < 0) {
    //                 clearInterval(x)
    //                 document.getElementById("dashboardTimer").innerHTML =
    //                     "Voting Closed."
    //             }
    //         }

    //     }, 1000)
    // }

    render() {
        if (this.state.loaded) {
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

                    <SEO title="Team Dashboard"></SEO>
                    <Navbar></Navbar>

                    <div className="dashboard-container">
                        <h1>Team Dashboard</h1>
                        <br></br>

                        <h3>
                            Hello,{" "}
                            <span>{this.state.teamdata.leader_name}</span>
                        </h3>
                        <h5>
                            Email:{" "}
                            <span>{this.state.teamdata.leader_email}</span>
                        </h5>
                        <br></br>

                        <h5 className="btn btn-dark">
                            Team Name:{" "}
                            <span>{this.state.teamdata.team_name}</span>
                        </h5>
                        <h5 className="btn btn-dark">
                            Team Size:{" "}
                            <span>{this.state.teamdata.number_of_members}</span>
                        </h5>
                        <br></br>
                        <h5 className="btn btn-dark">
                            College:{" "}
                            <span>{this.state.teamdata.college_name}</span>
                        </h5>
                        <br></br>
                        <h5 className="btn btn-dark">
                            Selected Domain:{" "}
                            <span>{this.state.teamdata.domain}</span>
                        </h5>

                        <div className="voting">
                            <h1 style={{ fontSize: "1.8rem" }}>
                                Winning Problem Statement
                            </h1>

                            <h5>
                                {this.state.problem_statements[1]}/
                                {this.state.problem_statements[2]} votes
                            </h5>
                            <br></br>
                            <h5>{this.state.problem_statements[0]}</h5>
                        </div>

                        <div className="submissions">
                            <h1 style={{ fontSize: "1.8rem" }}>SUBMISSIONS</h1>

                            <h5>
                                Submissions Closed.
                            </h5>

                            <br></br>
                        </div>
                        <br></br>

                    </div>
                </div>
            )
        } else {
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

                    <SEO title="Team Dashboard"></SEO>
                    <Navbar></Navbar>

                    <div className="dashboard-container">
                        <h1>Team Dashboard</h1>

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

export default Dashboard

const timerStyle = {
    fontFamily: "Roboto, sans-serif",
    fontWeight: "700",
    fontSize: "1rem",
    wordSpacing: "0.3rem",
}
