import React from "react"
import Helmet from "react-helmet"

import SEO from "../components/seo"
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/home/footer/Footer"

import "./css/rules.css"
import RulesPDF from "../assets/Rules-DevHack.pdf"

export default function rules() {
    return (
        <div>
            <Helmet>
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Roboto+Mono&family=Roboto:wght@400;500;700&display=swap"
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

            <div className="rules-container">
                <h1>Rules for DevHack 2020</h1>

                <a href={RulesPDF} download style={{ color: "white" }}>
                    <button className="btn btn-primary">Download as PDF</button>
                </a>

                <h2>Rules</h2>
                <ol start="1">
                    <li>
                        <span>
                            Each team can have a minimum of 3 and maximum of 4
                            members.
                        </span>
                    </li>
                    <li>
                        <span>Each team should have one team </span>
                        <span>Captain</span>
                        <span>
                            , who will be responsible for forwarding all
                            necessary information to his team.
                        </span>
                    </li>
                    <li>
                        <span>
                            Each team has to select 1 domain of their choice out
                            of the 4 given domains while registering. No team
                            can change their domain once registered.
                        </span>
                    </li>
                    <li>
                        <span>
                            All the team leads will be added to a WhatsApp group
                            for better communication.
                        </span>
                    </li>
                    <li>
                        <span>Registration phase ends on</span>
                        <span>&nbsp;26th April 2020 at 00:00 hours</span>
                        <span>
                            . After this all team Captains will receive a list
                            of problem statements from the domain they have
                            chosen. They have to vote for 1 problem statement
                            from their domain within{" "}
                        </span>
                        <span>24 hours</span>
                        <span>&nbsp;of receiving the problem statements.</span>
                        <span >
                            Explanation:- All captains who selected Transportation
                            as their domain will receive a list of problem
                            statements related to Transportation and a means to
                            vote. After 24 hours we will announce the most voted
                            problem statement of Transportation domain. A similar
                            process will be done for the remaining 3 domains too.<br></br>
                        </span>
                        <span c11 >
                            If there is a tie then organisers will give the
                            tie-breaker vote.
                        </span>
                        
                    </li>
                    <li>
                        <span>
                            After the voting phase is over, you can now see the
                            most voted problem statement from each domain. Teams
                            of Transportation domain will now have to work on
                            the most voted problem statement of Transportation
                            domain. Similarly, other domain teams work on the
                            most voted problem statement of their domain.{" "}
                        </span>
                        <span c11 >
                            This marks the beginning of the Preliminary Round.
                        </span>
                    </li>
                </ol>
                
                <h3>Preliminary Round</h3>
                
                <ol>
                    <li>
                        <span>Team captains have to create a single </span>
                        <span >private repository</span>
                        <span>&nbsp;on </span>
                        <span >Github</span>
                        <span>&nbsp;from our template repository at </span>
                        <span>
                            <a
                            
                                href="https://www.google.com/url?q=https://github.com/dsckiit/TeamName-DomainName-DevHacks&amp;sa=D&amp;ust=1587134261148000"
                            >
                                https://github.com/dsckiit/TeamName-DomainName-DevHacks
                            </a>
                        </span>
                        <span>&nbsp;and </span>
                        <span >add dsckiit as collaborator</span>
                        <span>. (Do not fork. Use Github&rsquo;s</span>
                        <span >
                            &nbsp;&ldquo;Use as template&rdquo;
                        </span>
                        <span >
                            &nbsp;button to create your repository from this
                            template)
                        </span>
                        <span >
                            PPT is compulsory and should be added to this
                            repository.
                        </span>
                        <span >
                            Note: If you want to send us a video to demonstrate your
                            solution, upload the video on your Google Drive and
                            share us the link. Video length should not exceed 5
                            minutes.
                        </span>
                    </li>
                    
                    <li>
                        <span >
                            The team is expected to submit a PPT (compulsory), a
                            video explaining their project(optional), and a
                            prototype (Extra marks will be awarded if prototype
                            is ready). Further rules for PPT will be communicated via E-mail or WhatsApp.
                        </span>
                    </li>
                    <li>
                        <span >
                            Submit your repository link (and optional video
                            link) on Dev Hacks portal or via the google form
                            mailed to the Team Captains.
                        </span>
                    </li>
                    <li>
                        <span >
                            Once submitted, no further changes in the repository
                            and its contents is allowed. Any team found making
                            changes will be disqualified.
                        </span>
                    </li>
                    <li>
                        <span>Submission phase begins at </span>
                        <span >15:00 hours on 30th April 2020</span>
                        <span>&nbsp;and closes at </span>
                        <span>15:00 hours on 1st May 2020.</span>
                    </li>
                </ol>
                
                <p>
                    <span>
                        Note: If the number of registered participants in any
                        domain exceeds 20 then we will only accept the{" "}
                    </span>
                    <span >first 20 submissions</span>
                    <span>
                        &nbsp;from that domain for this round.
                    </span>
                </p>

                <ol>
                    <li>
                        <span >
                            Once the submission phase is over, a panel of judges
                            from DSC KIIT will start scoring each submission.
                        </span>
                    </li>
                    <li>
                        <span >
                            Final calculated scores will be shown on the Dev
                            Hacks leaderboard. Each domain will have it&rsquo;s
                            separate leaderboard. Top 3 teams from each domain
                            move to the final round.
                        </span>
                    </li>
                    <li>
                        <span>The Prelims results will be displayed on </span>
                        <span >devhack.dsckiit.tech</span>
                        <span >&nbsp;on 2nd May 2020.</span>
                    </li>
                </ol>
               
                <h3>Final Round</h3>

                <ol>
                    <li>
                        <span>The</span>
                        <span >&nbsp;top 12 teams</span>
                        <span>
                            &nbsp;in the finals will be given a time slot and a
                            link to join the Zoom/Hangouts session with the
                            final Judge on{" "}
                        </span>
                        <span c11 >3rd May.</span>
                        <span >
                            Note: The scores of the prelims round will be nullified.
                        </span>
                    </li>
                    <li>
                        <span >
                            All members of a team should be present during the
                            zoom/hangouts call.
                        </span>
                    </li>
                    <li>
                        <span >
                            Each team will get 5 minutes to present their
                            solution to the judge by sharing their screen for
                            PPT and 2 minutes will be allocated to the judges
                            for cross-questioning.
                        </span>
                    </li>
                    <li>
                        <span >
                            All teams must respect the judge&rsquo;s final
                            decision.
                        </span>
                    </li>
                </ol>
                
                <h3>Results</h3>
                
                <p>
                    <span>Following results will be announced:</span>
                </p>
                <ul>
                    <li>
                        <span >Winner - overall</span>
                    </li>
                    <li>
                        <span >1st runner up</span>
                    </li>
                    <li>
                        <span >2nd runner up</span>
                    </li>
                </ul>
                <p>
                    <span ></span>
                </p>
                <p>
                    <span >
                        Certificates will be mailed to the finalists at their
                        team captain&rsquo;s mail id.
                    </span>
                </p>
                <br></br>
                <br></br>
            </div>

            <Footer></Footer>
        </div>
    )
}
