import React from "react"
import Helmet from "react-helmet"

import SEO from "../../components/seo"
import Navbar from "../../components/navbar/Navbar"

const data = [
    {
        college_name: "KIIT",
        domain: "Environment",
        git_repo_link:
            "https://github.com/hotaanubhab/Triple_5-Environment-DevHacks.git",
        leader_email: "1905522@kiit.ac.in",
        leader_name: "Anubhab Hota",
        marks: {
            business_potential: "9",
            impact_on_society: "8",
            innovation: "7",
            practicality: "8",
            prototype: "5",
        },
        number_of_members: 3,
        submission_time_stamp:
            "Fri May 01 2020 14:29:08 GMT+0530 (India Standard Time)",
        team_name: "Triple_5",
        total: 37,
    },
    {
        college_name: "KALINGA INSTITUTE OF INDUSTRIAL TECHNOLOGY",
        domain: "Environment",
        git_repo_link:
            "https://github.com/Sirsho29/Code_Rulers-Environment-DevHacks",
        leader_email: "1905052@kiit.ac.in",
        leader_name: "Saswata Ghosh",
        marks: {
            business_potential: "8",
            impact_on_society: "6",
            innovation: "6",
            practicality: "8",
            prototype: "5",
        },
        number_of_members: 4,
        submission_time_stamp:
            "Thu Apr 30 2020 15:00:57 GMT+0530 (India Standard Time)",
        team_name: "Code_Rulers",
        total: 33,
    },
    {
        college_name: "NMAM Institute of Technology",
        domain: "Environment",
        git_repo_link:
            "https://github.com/RyuuKenshi/CrypticCoders-Environment-DevHacks",
        leader_email: "arjunsinha2122000@gmail.com",
        leader_name: "Arjun Sinha",
        marks: {
            business_potential: "6",
            impact_on_society: "7",
            innovation: "7",
            practicality: "6",
            prototype: "5",
        },
        number_of_members: 4,
        submission_time_stamp:
            "Fri May 01 2020 09:38:14 GMT+0530 (India Standard Time)",
        team_name: "CrypticCoders",
        total: 31,
    },
    {
        college_name: "Chandigarh University",
        domain: "Environment",
        git_repo_link:
            "https://github.com/P1YU5H-50N1/RuntimeTerror-Environment-DevHacks",
        leader_email: "tusharsri070801@gmail.com",
        leader_name: "Tushar Srivastava",
        marks: {
            business_potential: "5",
            impact_on_society: "5",
            innovation: "7",
            practicality: "7",
            prototype: "5",
        },
        number_of_members: 3,
        submission_time_stamp:
            "Fri May 01 2020 21:44:19 GMT+0530 (India Standard Time)",
        team_name: "Runtime Terror",
        total: 29,
    },
    {
        college_name: "KIIT UNIVERSITY",
        domain: "Environment",
        git_repo_link:
            "https://github.com/Aayush-Vats/ENiAC-Environment-DevHacks/invitations",
        leader_email: "aayushdba@gmail.com",
        leader_name: "Aayush Vats",
        marks: {
            business_potential: "4",
            impact_on_society: "6",
            innovation: "6",
            practicality: "6",
            prototype: "5",
        },
        number_of_members: 4,
        submission_time_stamp:
            "Fri May 01 2020 13:39:28 GMT+0530 (India Standard Time)",
        team_name: "ENiAC",
        total: 27,
    },
    {
        college_name: "Kalinga Institute Of Industrial Technology ",
        domain: "Environment",
        git_repo_link:
            "https://github.com/rashrey2308/The_Blank-Environment-DevHacks",
        leader_email: "1805019@kiit.ac.in",
        leader_name: "Anvesh",
        marks: {
            business_potential: "5",
            impact_on_society: "6",
            innovation: "8",
            practicality: "5",
            prototype: "2",
        },
        number_of_members: 4,
        submission_time_stamp:
            "Fri May 01 2020 14:39:45 GMT+0530 (India Standard Time)",
        team_name: "The_Blank",
        total: 26,
    },
    {
        college_name: "KIIT DU",
        domain: "Environment",
        git_repo_link:
            "https://github.com/BedaBora/Keyloggers-Environment-DevHacks",
        leader_email: "1706123@kiit.ac.in",
        leader_name: "Bedabrata Bora ",
        marks: {
            business_potential: "6",
            impact_on_society: "5",
            innovation: "5",
            practicality: "7",
            prototype: "2",
        },
        number_of_members: 3,
        submission_time_stamp:
            "Fri May 01 2020 15:07:01 GMT+0530 (India Standard Time)",
        team_name: "Keyloggers",
        total: 25,
    },
    {
        college_name: "NMAM Institute of Technology, Nitte",
        domain: "Environment",
        git_repo_link: "https://github.com/krishna469warrior/RSCube",
        leader_email: "sssrihari2000@gmail.com",
        leader_name: "Srihari Sithu Sudarsan",
        marks: {
            business_potential: "6",
            impact_on_society: "5",
            innovation: "5",
            practicality: "6",
            prototype: "2",
        },
        number_of_members: 4,
        submission_time_stamp:
            "Fri May 01 2020 14:57:39 GMT+0530 (India Standard Time)",
        team_name: "RSCube",
        total: 24,
    },
]

const EnvironmentLeaderboardPage = () => {
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
            <h1 style={headerStyle}>ENVIRONMENT</h1>

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

export default EnvironmentLeaderboardPage
