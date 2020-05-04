import React from "react"
import Helmet from "react-helmet"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/home/footer/Footer"

import "./css/schedule.css"

export default function schedule() {
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
            <div className="schedule-container">
                <h1>Schedule for DevHack 2020</h1>
                <br></br>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Date</th>
                            <th scope="col">Day</th>
                            <th scope="col">Time</th>
                            <th scope="col">Event</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>17th April, 2020</td>
                            <td>Friday</td>
                            <td>10 pm</td>
                            <td>Registration for DevHack 2020 starts</td>
                        </tr>

                        <tr>
                            <th scope="row">2</th>
                            <td>19th April, 2020</td>
                            <td>Sunday</td>
                            <td>3 pm</td>
                            <td>
                                YouTube Session on{" "}
                                <span className="font-weight-bold">
                                    Basics of Git and Github
                                </span>{" "}
                                by Saswata Mukherjee
                            </td>
                        </tr>

                        <tr>
                            <th scope="row">3</th>
                            <td>25th April, 2020</td>
                            <td>Saturday</td>
                            <td>3 pm</td>
                            <td>
                                YouTube Session on{" "}
                                <span className="font-weight-bold">
                                    Pitching Business Models
                                </span>{" "}
                                by Abhishek Agarwal
                            </td>
                        </tr>

                        <tr>
                            <th scope="row">4</th>
                            <td>26th April, 2020</td>
                            <td>Sunday</td>
                            <td>00:00 hrs</td>
                            <td>
                                <span className="font-weight-bold">
                                    Registration Ends
                                </span>
                            </td>
                        </tr>

                        <tr>
                            <th scope="row">5</th>
                            <td>26th April, 2020</td>
                            <td>Sunday</td>
                            <td>10 am</td>
                            <td>
                                Problem Statements will be sent to Team Leads
                                for voting.
                            </td>
                        </tr>

                        <tr>
                            <th scope="row">6</th>
                            <td>27th April, 2020</td>
                            <td>Monday</td>
                            <td>10:00 am</td>
                            <td>
                                Voting for problem statements closes.
                            </td>
                        </tr>

                        <tr>
                            <th scope="row">7</th>
                            <td>27th April, 2020</td>
                            <td>Monday</td>
                            <td>1:00 pm</td>
                            <td>
                                Announcement of final problem statement for each
                                domain.
                            </td>
                        </tr>

                        <tr>
                            <th scope="row">8</th>
                            <td>30th April, 2020</td>
                            <td>Thursday</td>
                            <td>3:00 pm</td>
                            <td>
                                <span className="font-weight-bold">
                                    Submission Phase begins
                                </span>{" "}
                            </td>
                        </tr>

                        <tr>
                            <th scope="row">9</th>
                            <td>1st May, 2020</td>
                            <td>Friday</td>
                            <td>3:00 pm</td>
                            <td>
                                <span className="font-weight-bold">
                                    Submission Phase ends
                                </span>{" "}
                            </td>
                        </tr>

                        <tr>
                            <th scope="row">10</th>
                            <td>2nd May, 2020</td>
                            <td>Saturday</td>
                            <td>at 3:00 pm</td>
                            <td>
                                Leaderboard launch. Top 3 teams in each domain
                                qualify for the next round.
                            </td>
                        </tr>

                        <tr>
                            <th scope="row">11</th>
                            <td>3rd May, 2020</td>
                            <td>Sunday</td>
                            <td>will be notified</td>
                            <td>
                                <span className="font-weight-bold">
                                    Final Presentation
                                </span>{" "}
                                over video conferencing with judges.
                            </td>
                        </tr>
                    </tbody>
                </table>

                <br></br><br></br>
                
                <div style={{textAlign: 'center'}}>
                    <span>
                        For more detailed instructions please refer the{" "}
                        <Link to="/rules">rules</Link>
                    </span>
                </div>

            </div>
            <Footer></Footer>
        </div>
    )
}
