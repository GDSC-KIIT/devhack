import React, { useEffect } from "react"
import Helmet from "react-helmet"
import { Link } from 'gatsby'

import SEO from "../../components/seo"
import Navbar from "../../components/navbar/Navbar"


const LeaderboardPage = () => {
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

            <SEO title="DevHack by DSCKIIT"></SEO>

            <Navbar></Navbar>
            <br></br><br></br><br></br><br></br><br></br>
            
            <br></br>
            <br></br>
            
            <h1 style={headerStyle}>DevHack 2020 Leaderboard</h1>
            
            <div style={{ textAlign: "center", paddingTop: "2rem" }}>
                <Link
                    className="btn btn-lg btn-primary"
                    style={{
                        color: "white",
                        textDecoration: "none",
                        margin: "0.7rem",
                    }}
                    to="/leaderboard/education"
                >
                    Education
                </Link>

                <Link
                    className="btn btn-lg btn-primary"
                    style={{
                        color: "white",
                        textDecoration: "none",
                        margin: "0.7rem",
                    }}
                    to="/leaderboard/environment"
                >
                    Environment
                </Link>

                <Link
                    className="btn btn-lg btn-primary"
                    style={{
                        color: "white",
                        textDecoration: "none",
                        margin: "0.7rem",
                    }}
                    to="/leaderboard/transport"
                >
                    Transport
                </Link>

                <Link
                    className="btn btn-lg btn-primary"
                    style={{
                        color: "white",
                        textDecoration: "none",
                        margin: "0.7rem",
                    }}
                    to="/leaderboard/healthcare"
                >
                    Healthcare
                </Link>
            </div>
        </div>
    )
}

const headerStyle = {
    fontFamily: "Poppins, sans-serif",
    textAlign: "center",
    fontWeight: 700,
}


export default LeaderboardPage
