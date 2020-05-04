import React from "react"
import Helmet from "react-helmet"

import SEO from "../../components/seo"
import Navbar from "../../components/navbar/Navbar"

const data = [
    {
        college_name:
            "Kalinga Institute of Industrial Technology, Amity University",
        domain: "Transport",
        git_repo_link:
            "https://github.com/Pakhi101/Brogrammers-Transport-DevHacks",
        leader_email: "pal.ritwika2@gmail.com",
        leader_name: "Ritwika Pal",
        marks: {
            business_potential: "9",
            impact_on_society: "7",
            innovation: "8",
            practicality: "8",
            prototype: "5",
        },
        number_of_members: 4,
        submission_time_stamp:
            "Thu Apr 30 2020 15:00:15 GMT+0530 (India Standard Time)",
        team_name: "Brogrammers",
        total: 37,
    },
    {
        college_name: "Manipal Institute of Technology",
        domain: "Transport",
        git_repo_link:
            "https://github.com/shoumikdey/TechTeam_Returns-Transport-DevHacks",
        leader_email: "shoumikdey123@gmail.com",
        leader_name: "Shoumik Dey",
        marks: {
            business_potential: "8",
            impact_on_society: "8",
            innovation: "7",
            practicality: "8",
            prototype: "4",
        },
        number_of_members: 3,
        submission_time_stamp:
            "Thu Apr 30 2020 21:40:23 GMT+0530 (India Standard Time)",
        team_name: "TechTeam_Returns",
        total: 35,
    },
    {
        college_name: "Kalinga Institute of Industrial Technology",
        domain: "Transport",
        git_repo_link:
            "https://github.com/Sinjan31/Kali_Torjan-Transport-DevHacks.git",
        leader_email: "1805529@kiit.ac.in",
        leader_name: "Sinjan Roy",
        marks: {
            business_potential: "6",
            impact_on_society: "8",
            innovation: "7",
            practicality: "8",
            prototype: "5",
        },
        number_of_members: 4,
        submission_time_stamp:
            "Thu Apr 30 2020 16:19:31 GMT+0530 (India Standard Time)",
        team_name: "Kali_Torjan",
        total: 34,
    },
    {
        college_name: "Kiit University",
        domain: "Transport",
        git_repo_link:
            "https://github.com/mudit4158/BloodShedders-Transportation-DevHacks",
        leader_email: "1805148@kiit.ac.in",
        leader_name: "Mudit Sarawagi",
        marks: {
            business_potential: "8",
            impact_on_society: "7",
            innovation: "7",
            practicality: "6",
            prototype: "5",
        },
        number_of_members: 4,
        submission_time_stamp:
            "Thu Apr 30 2020 15:03:49 GMT+0530 (India Standard Time)",
        team_name: "Blood Shedders",
        total: 33,
    },
    {
        college_name: "Kalinga institute of industrial technology",
        domain: "Transport",
        git_repo_link:
            "https://github.com/adirups285/RAAM-Transportation-DevHack",
        leader_email: "1905222@kiit.ac.in",
        leader_name: "Aditya Das",
        marks: {
            business_potential: "7",
            impact_on_society: "7",
            innovation: "7",
            practicality: "7",
            prototype: "4",
        },
        number_of_members: 4,
        submission_time_stamp:
            "Thu Apr 30 2020 15:10:16 GMT+0530 (India Standard Time)",
        team_name: "RAAM",
        total: 32,
    },
    {
        college_name: "Kalinga Institute of Industrial Technology",
        domain: "Transport",
        git_repo_link:
            "https://github.com/AryaSengupta00/Recursion-Transportation-DevHacks.git",
        leader_email: "1829047@kiit.ac.in",
        leader_name: "Arya Sengupta",
        marks: {
            business_potential: "7",
            impact_on_society: "6",
            innovation: "7",
            practicality: "8",
            prototype: "4",
        },
        number_of_members: 4,
        submission_time_stamp:
            "Thu Apr 30 2020 15:04:16 GMT+0530 (India Standard Time)",
        team_name: "Recursion",
        total: 32,
    },
    {
        college_name: "KALINGA INSTITUTE OF INDUSTRIAL TECHNOLOGY, BHUBANESWAR",
        domain: "Transport",
        git_repo_link:
            "https://github.com/devabhishekpal/Team-Appolo-Transport-DevHacks",
        leader_email: "1805197@kiit.ac.in",
        leader_name: "ARINDAM DAS",
        marks: {
            business_potential: "7",
            impact_on_society: "7",
            innovation: "7",
            practicality: "7",
            prototype: "3",
        },
        number_of_members: 4,
        submission_time_stamp:
            "Thu Apr 30 2020 15:02:07 GMT+0530 (India Standard Time)",
        team_name: "TEAM APPOLO",
        total: 31,
    },
    {
        college_name: "KIIT University",
        domain: "Transport",
        git_repo_link:
            "https://github.com/shivi-web/Qwerty-Transport-Devhacks.git",
        leader_email: "1806069@kiit.ac.in",
        leader_name: "Shivani Kumari",
        marks: {
            business_potential: "6",
            impact_on_society: "6",
            innovation: "7",
            practicality: "6",
            prototype: "5",
        },
        number_of_members: 4,
        submission_time_stamp:
            "Thu Apr 30 2020 15:00:22 GMT+0530 (India Standard Time)",
        team_name: "Qwerty",
        total: 30,
    },
    {
        college_name: "KIIT University",
        domain: "Transport",
        git_repo_link:
            "https://github.com/ShrishaMohan/404_found-Transportation-DevHacks",
        leader_email: "Shrisha.mohan@gmail.com",
        leader_name: "Shrisha Mohan",
        marks: {
            business_potential: "6",
            impact_on_society: "8",
            innovation: "7",
            practicality: "7",
            prototype: "2",
        },
        number_of_members: 4,
        submission_time_stamp:
            "Thu Apr 30 2020 19:58:56 GMT+0530 (India Standard Time)",
        team_name: "404_found",
        total: 30,
    },
    {
        college_name: "KIIT University",
        domain: "Transport",
        git_repo_link: "https://github.com/yash6334/DevHack.git",
        leader_email: "1805314@kiit.ac.in",
        leader_name: "Yash Agarwal",
        marks: {
            business_potential: "6",
            impact_on_society: "7",
            innovation: "7",
            practicality: "7",
            prototype: "1",
        },
        number_of_members: 3,
        submission_time_stamp:
            "Thu Apr 30 2020 15:01:30 GMT+0530 (India Standard Time)",
        team_name: "Triggered",
        total: 28,
    },
    {
        college_name: "KIIT",
        domain: "Transport",
        git_repo_link:
            "https://github.com/Masters-Akt/TM34-Transportation-DevHacks",
        leader_email: "1905537@kiit.ac.in",
        leader_name: "Kumar Ankit",
        marks: {
            business_potential: "7",
            impact_on_society: "6",
            innovation: "6",
            practicality: "7",
            prototype: "1",
        },
        number_of_members: 4,
        submission_time_stamp:
            "Thu Apr 30 2020 15:07:51 GMT+0530 (India Standard Time)",
        team_name: "TM34",
        total: 27,
    },
    {
        college_name: "Kalinga Institute of Industrial Technology",
        domain: "Transport",
        git_repo_link: "https://github.com/shiladityaroy212/alpha_hy.git",
        leader_email: "1828102@kiit.ac.in",
        leader_name: "Shiladitya Roy",
        marks: {
            business_potential: "6",
            impact_on_society: "6",
            innovation: "6",
            practicality: "7",
            prototype: "2",
        },
        number_of_members: 3,
        submission_time_stamp:
            "Thu Apr 30 2020 15:02:11 GMT+0530 (India Standard Time)",
        team_name: "ALPHA HYDRANOID",
        total: 27,
    },
    {
        college_name: "United College of Engineering and Management",
        domain: "Transport",
        git_repo_link:
            "https://github.com/anugrahpaul2000/The-Hounds-United-Transportation-DevHacks",
        leader_email: "anugrahpaul2000@gmail.com",
        leader_name: "Anugrah Vishwas Paul",
        marks: {
            business_potential: "5",
            impact_on_society: "7",
            innovation: "6",
            practicality: "7",
            prototype: "1",
        },
        number_of_members: 4,
        submission_time_stamp:
            "Thu Apr 30 2020 15:01:51 GMT+0530 (India Standard Time)",
        team_name: "The Hounds United",
        total: 26,
    },
    {
        college_name: "Kalinga Institute of Industrial Technology",
        domain: "Transport",
        git_repo_link:
            "https://github.com/ReSolve-Transportaion-DevHacks/ReSolve1",
        leader_email: "kaustavroy49@gmail.com",
        leader_name: "Kaustav Roy",
        marks: {
            business_potential: "3",
            impact_on_society: "7",
            innovation: "5",
            practicality: "6",
            prototype: "3",
        },
        number_of_members: 4,
        submission_time_stamp:
            "Thu Apr 30 2020 15:40:47 GMT+0530 (India Standard Time)",
        team_name: "ReSolve",
        total: 24,
    },
    {
        college_name: "KIIT university",
        domain: "Transport",
        git_repo_link:
            "https://github.com/pratyush8533/Technophile-Transport-DevHacks",
        leader_email: "1906188@kiit.ac.in",
        leader_name: "Pratyush Kumar",
        marks: {
            business_potential: "5",
            impact_on_society: "6",
            innovation: "5",
            practicality: "6",
            prototype: "0",
        },
        number_of_members: 4,
        submission_time_stamp:
            "Thu Apr 30 2020 15:00:38 GMT+0530 (India Standard Time)",
        team_name: "Technophile",
        total: 22,
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
            <h1 style={headerStyle}>TRANSPORT</h1>
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
            `
        </div>
    )
}

const headerStyle = {
    fontFamily: "Poppins, sans-serif",
    textAlign: "center",
    fontWeight: 700,
}

export default TransportLeaderboardPage
