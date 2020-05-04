import React from "react"
import Helmet from "react-helmet"

import SEO from "../../components/seo"
import Navbar from "../../components/navbar/Navbar"

const data = [
    {
        college_name: "KALINGA INSTITUTE OF INDUSTRIAL TECHNOLOGY",
        domain: "Healthcare",
        git_repo_link:
            "https://github.com/akash-ranjan8/NOOBS-HEALTHCARE-DevHacks.git",
        leader_email: "1829036@kiit.ac.in",
        leader_name: "AKASH RANJAN",
        marks: {
            business_potential: "8",
            impact_on_society: "8",
            innovation: "7",
            practicality: "8",
            prototype: "4",
        },
        number_of_members: 4,
        submission_time_stamp:
            "Thu Apr 30 2020 15:01:57 GMT+0530 (India Standard Time)",
        team_name: "NOOBS",
        total: 35,
    },
    {
        college_name: "College of Engineering and Technology, Bhubaneswar",
        domain: "Healthcare",
        git_repo_link:
            "https://github.com/github-user09/TeamAlgorithm-Healthcare-DevHacks.git",
        leader_email: "treehouse7751@gmail.com",
        leader_name: "Richa Thakur ",
        marks: {
            business_potential: "7",
            impact_on_society: "8",
            innovation: "6",
            practicality: "7",
            prototype: "4",
        },
        number_of_members: 4,
        submission_time_stamp:
            "Thu Apr 30 2020 15:09:47 GMT+0530 (India Standard Time)",
        team_name: "Team Algorithm ",
        total: 32,
    },
    {
        college_name: "KIIT Deemed to be University",
        domain: "Healthcare",
        git_repo_link: "https://github.com/triii10/Lazarus-Healthcare-DevHacks",
        leader_email: "1705281@kiit.ac.in",
        leader_name: "Trilok Bhattacharya",
        marks: {
            business_potential: "7",
            impact_on_society: "7",
            innovation: "8",
            practicality: "5",
            prototype: "3",
        },
        number_of_members: 3,
        submission_time_stamp:
            "Thu Apr 30 2020 21:32:18 GMT+0530 (India Standard Time)",
        team_name: "Lazarus",
        total: 30,
    },
    {
        college_name: "KIIT,Bhubaneswar",
        domain: "Healthcare",
        git_repo_link:
            "https://github.com/SiddhiVTripathi/SolveRx-Healthcare-DevHacks.git",
        leader_email: "siddhi19vinayak@gmail.com",
        leader_name: "Siddhi Vinayak Tripathi",
        marks: {
            business_potential: "8",
            impact_on_society: "7",
            innovation: "7",
            practicality: "4",
            prototype: "2",
        },
        number_of_members: 4,
        submission_time_stamp:
            "Fri May 01 2020 14:01:10 GMT+0530 (India Standard Time)",
        team_name: "SolveRx",
        total: 28,
    },
    {
        college_name: "Kalinga Institute of Industrial Technology",
        domain: "Healthcare",
        git_repo_link:
            "https://github.com/dhruba-das/Runtime_Terror-Healthcare-DevHacks",
        leader_email: "1928093@kiit.ac.in",
        leader_name: "Dhruba Das",
        marks: {
            business_potential: "7",
            impact_on_society: "6",
            innovation: "5",
            practicality: "6",
            prototype: "3",
        },
        number_of_members: 3,
        submission_time_stamp:
            "Thu Apr 30 2020 15:06:28 GMT+0530 (India Standard Time)",
        team_name: "Runtime Terror",
        total: 27,
    },
    {
        college_name: "Kalinga Institute of industrial technology odisha ",
        domain: "Healthcare",
        git_repo_link:
            "https://github.com/mayank8120/HackIn-Healthcare-DevHacks",
        leader_email: "budh.skka@gmail.com",
        leader_name: "Kartik Budhraja ",
        marks: {
            business_potential: "5",
            impact_on_society: "5",
            innovation: "6",
            practicality: "6",
            prototype: "4",
        },
        number_of_members: 3,
        submission_time_stamp:
            "Thu Apr 30 2020 16:38:15 GMT+0530 (India Standard Time)",
        team_name: "Hackln",
        total: 26,
    },
    {
        college_name: "Silicon Institute of Technology, Bhubaneswar",
        domain: "Healthcare",
        git_repo_link:
            "https://github.com/sumeetweb/Jcoders-Healthcare-DevHacks",
        leader_email: "akhtarskarshad2@gmail.com",
        leader_name: "Sk. Arshad Akhtar",
        marks: {
            business_potential: "6",
            impact_on_society: "6",
            innovation: "5",
            practicality: "6",
            prototype: "3",
        },
        number_of_members: 3,
        submission_time_stamp:
            "Fri May 01 2020 14:52:56 GMT+0530 (India Standard Time)",
        team_name: "Jcoders",
        total: 26,
    },
    {
        college_name: "KIIT",
        domain: "Healthcare",
        git_repo_link:
            "https://github.com/rayak-sil/CodeVagabonds-Healthcare-DevHacks",
        leader_email: "1829099@kiit.ac.in",
        leader_name: "Siddharth Singh",
        marks: {
            business_potential: "5",
            impact_on_society: "6",
            innovation: "5",
            practicality: "6",
            prototype: "4",
        },
        number_of_members: 4,
        submission_time_stamp:
            "Thu Apr 30 2020 15:38:28 GMT+0530 (India Standard Time)",
        team_name: "Code Vagabonds",
        total: 26,
    },
    {
        college_name: "Kalinga Institute of Industrial Technology",
        domain: "Healthcare",
        git_repo_link:
            "https://github.com/xayron/Outliners-Healthcare-DevHacks",
        leader_email: "1806551@kiit.ac.in",
        leader_name: "Debjit Chakraborty",
        marks: {
            business_potential: "5",
            impact_on_society: "6",
            innovation: "5",
            practicality: "6",
            prototype: "3",
        },
        number_of_members: 4,
        submission_time_stamp:
            "Thu Apr 30 2020 17:50:20 GMT+0530 (India Standard Time)",
        team_name: "Outliers",
        total: 25,
    },
    {
        college_name: "KALINGA INSTITUTE OF INDUSTRIAL TECHNOLOGY ",
        domain: "Healthcare",
        git_repo_link:
            "https://github.com/utkarsh8021/CodeArt-Healthcare-DevHacks",
        leader_email: "sougatanayak007@gmail.com",
        leader_name: "SOUGATA NAYAK",
        marks: {
            business_potential: "5",
            impact_on_society: "5",
            innovation: "7",
            practicality: "6",
            prototype: "1",
        },
        number_of_members: 3,
        submission_time_stamp:
            "Fri May 01 2020 09:32:31 GMT+0530 (India Standard Time)",
        team_name: "CodeArt",
        total: 24,
    },
    {
        college_name: "KIIT",
        domain: "Healthcare",
        git_repo_link:
            "https://github.com/BINARY-BEASTS-KIIT/BINARYBEASTS-HEALTHCARE-devhack.git",
        leader_email: "1804488@kiit.ac.in",
        leader_name: "UTSAB GHOSH",
        marks: {
            business_potential: "5",
            impact_on_society: "6",
            innovation: "6",
            practicality: "5",
            prototype: "2",
        },
        number_of_members: 4,
        submission_time_stamp:
            "Fri May 01 2020 18:35:51 GMT+0530 (India Standard Time)",
        team_name: "Binary Beast",
        total: 24,
    },
    {
        college_name: "Kalinga Institute of Industrial Technology",
        domain: "Healthcare",
        git_repo_link: "https://github.com/anmol-sinha-coder/B.I.N.A.R.Y",
        leader_email: "1805553@kiit.ac.in",
        leader_name: "Anmol Sinha",
        marks: {
            business_potential: "6",
            impact_on_society: "4",
            innovation: "6",
            practicality: "6",
            prototype: "0",
        },
        number_of_members: 4,
        submission_time_stamp:
            "Thu Apr 30 2020 15:19:26 GMT+0530 (India Standard Time)",
        team_name: "B.I.N.A.R.Y",
        total: 22,
    },
    {
        college_name: "Kiit University",
        domain: "Healthcare",
        git_repo_link:
            "https://github.com/shikha1209/Mind-Mappers-Healthcare-DevHacks.git",
        leader_email: "Shikha12900@gmail.com",
        leader_name: "Shikha",
        marks: {
            business_potential: "3",
            impact_on_society: "4",
            innovation: "4",
            practicality: "5",
            prototype: "4",
        },
        number_of_members: 4,
        submission_time_stamp:
            "Thu Apr 30 2020 15:04:06 GMT+0530 (India Standard Time)",
        team_name: "Mind mappers",
        total: 20,
    },
]

const HealthcareLeaderboardPage = () => {
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
            <h1 style={headerStyle}>HEALTHCARE</h1>

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

export default HealthcareLeaderboardPage
