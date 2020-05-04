import React from "react"
import Helmet from "react-helmet"

import SEO from "../../components/seo"
import Navbar from "../../components/navbar/Navbar"

const data = [
    {
        college_name: "Pranveer Singh Institute Of Technology",
        domain: "Education",
        git_repo_link:
            "https://github.com/Suryansh1004/Undercover-Education-DevHacks",
        leader_email: "suryansh1004@gmail.com",
        leader_name: "Suryansh Tripathi",
        marks: {
            business_potential: "8",
            impact_on_society: "6.5",
            innovation: "7",
            practicality: "8.5",
            prototype: "4.5",
        },
        number_of_members: 4,
        submission_time_stamp:
            "Thu Apr 30 2020 15:03:59 GMT+0530 (India Standard Time)",
        team_name: "Undercover",
        total: 34.5,
    },
    {
        college_name: "Kalinga Institute of Industrial Technology",
        domain: "Education",
        git_repo_link:
            "https://github.com/RiaSingh2000/DementorDivas-Education-Devhacks",
        leader_email: "rias8957@gmail.com",
        leader_name: "Ria Singh",
        marks: {
            business_potential: "7",
            impact_on_society: "7",
            innovation: "8",
            practicality: "7",
            prototype: "4.5",
        },
        number_of_members: 3,
        submission_time_stamp:
            "Fri May 01 2020 04:33:48 GMT+0530 (India Standard Time)",
        team_name: "Dementor Divas",
        total: 33.5,
    },
    {
        college_name: "Kalinga Institute of Industrial Technology",
        domain: "Education",
        git_repo_link:
            "https://github.com/ShreyAgarwal11/TechZombie-Education-DevHacks",
        leader_email: "1806333@kiit.ac.in",
        leader_name: "Sakshi Simhal",
        marks: {
            business_potential: "7",
            impact_on_society: "7",
            innovation: "7.5",
            practicality: "6.5",
            prototype: "3",
        },
        number_of_members: 4,
        submission_time_stamp:
            "Thu Apr 30 2020 18:06:18 GMT+0530 (India Standard Time)",
        team_name: "Tech Zombie",
        total: 31,
    },
    {
        college_name: "Kalinga Institute of Industrial Technology",
        domain: "Education",
        git_repo_link:
            "https://github.com/priyansh17/Alpha-Education-DevHacks.git",
        leader_email: "im1706@gmail.com",
        leader_name: "Priyansh Choudhary",
        marks: {
            business_potential: "6",
            impact_on_society: "5",
            innovation: "4",
            practicality: "6",
            prototype: "1.5",
        },
        number_of_members: 4,
        submission_time_stamp:
            "Thu Apr 30 2020 15:07:21 GMT+0530 (India Standard Time)",
        team_name: "Alpha",
        total: 22.5,
    },
    {
        college_name: "Kalinga Institute of Industrial Technology",
        domain: "Education",
        git_repo_link:
            "https://github.com/Oishi2000/EtherBots-Education-DevHacks",
        leader_email: "sahaoishi17@gmail.com",
        leader_name: "Oishi Saha",
        marks: {
            business_potential: "6",
            impact_on_society: "6",
            innovation: "5",
            practicality: "4.5",
            prototype: "1",
        },
        number_of_members: 4,
        submission_time_stamp:
            "Thu Apr 30 2020 15:10:04 GMT+0530 (India Standard Time)",
        team_name: "Ether Bots",
        total: 22.5,
    },
    {
        college_name: "KIIT",
        domain: "Education",
        git_repo_link:
            "https://github.com/sambitraze/DecodeBrothers-Education-DevHacks",
        leader_email: "majhisambit2@gmail.com",
        leader_name: "Sambit Majhi",
        marks: {
            business_potential: "5",
            impact_on_society: "4",
            innovation: "3",
            practicality: "4",
            prototype: "2",
        },
        number_of_members: 4,
        submission_time_stamp:
            "Fri May 01 2020 13:32:20 GMT+0530 (India Standard Time)",
        team_name: "Decode Brothers",
        total: 18,
    },
    {
        college_name: "Kalinga Institute of industrial technology",
        domain: "Education",
        git_repo_link:
            "https://github.com/Dibyajeet3110/Pirates-Education-DevHacks",
        leader_email: "1905040@kiit.ac.in",
        leader_name: "Dibyajeet Mahana",
        marks: {
            business_potential: "4",
            impact_on_society: "4",
            innovation: "3.5",
            practicality: "3.5",
            prototype: "2",
        },
        number_of_members: 3,
        submission_time_stamp:
            "Thu Apr 30 2020 20:20:24 GMT+0530 (India Standard Time)",
        team_name: "Pirates",
        total: 17,
    },
    {
        college_name: "Kalinga Institute of Industrial Technology",
        domain: "Education",
        git_repo_link: "https://github.com/SantanuxD/Asskey-Education-DevHacks",
        leader_email: "1904465@kiit.ac.in",
        leader_name: "Santanu Biswas",
        marks: {
            business_potential: "3",
            impact_on_society: "6",
            innovation: "2",
            practicality: "4.5",
            prototype: "0",
        },
        number_of_members: 4,
        submission_time_stamp:
            "Fri May 01 2020 13:35:28 GMT+0530 (India Standard Time)",
        team_name: "ASSKEY",
        total: 15.5,
    },
    {
        college_name:
            "Kalinga Institute of Industrial Technology (KIIT), Bhubaneswar",
        domain: "Education",
        git_repo_link:
            "https://github.com/shreya-sinha-vittoria/Vittoria-Education-DevHacks.git",
        leader_email: "1804608@kiit.ac.in",
        leader_name: "Shreya Sinha",
        marks: {
            business_potential: "3",
            impact_on_society: "3",
            innovation: "2",
            practicality: "3.5",
            prototype: "0",
        },
        number_of_members: 3,
        submission_time_stamp:
            "Thu Apr 30 2020 16:41:52 GMT+0530 (India Standard Time)",
        team_name: "Vittoria",
        total: 11.5,
    },
    {
        college_name: "Vssut",
        domain: "Education",
        git_repo_link:
            "https://github.com/chiku1607/MUTANTS-Education-DevHacks",
        leader_email: "swati070302@gmail.com",
        leader_name: "Swati kumari",
        marks: {
            business_potential: "1",
            impact_on_society: "1",
            innovation: "2",
            practicality: "1.5",
            prototype: "0",
        },
        number_of_members: 4,
        submission_time_stamp:
            "Fri May 01 2020 02:48:08 GMT+0530 (India Standard Time)",
        team_name: "MUTANTS",
        total: 5.5,
    },
    {
        college_name: "KIIT",
        domain: "Education",
        git_repo_link: "https://github.com/ha19rsh/HTP-EDUCATION-DEVHACKS.git",
        leader_email: "1806310@kiit.ac.in",
        leader_name: "Harsh Asthana",
        marks: {
            business_potential: "1",
            impact_on_society: "1",
            innovation: "1",
            practicality: "0.5",
            prototype: "0",
        },
        number_of_members: 3,
        submission_time_stamp:
            "Thu Apr 30 2020 16:04:03 GMT+0530 (India Standard Time)",
        team_name: "HTP",
        total: 3.5,
    },
]

const TransportLeaderboardPage = () => {
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
            <br></br>
            <br></br>
            <h1 style={headerStyle}>DevHack 2020 Leaderboard</h1>
            <h1 style={headerStyle}>EDUCATION</h1>

            <br></br>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Team Name</th>
                        <th scope="col">Team Leader Name</th>
                        <th scope="col">Team Leader Email</th>
                        <th scope="col">Domain</th>
                        <th scope="col">Score</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d, i) => (
                        <tr>
                            <th scope="row">{i + 1}</th>
                            <td>{d["team_name"]}</td>
                            <td>{d["leader_name"]}</td>
                            <td>{d["leader_email"]}</td>
                            <td>{d["domain"]}</td>
                            <td>{d["total"]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

const headerStyle = {
    fontFamily: "Poppins, sans-serif",
    textAlign: "center",
    fontWeight: 700,
}

export default TransportLeaderboardPage
