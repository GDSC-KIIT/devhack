import React from "react"
import Helmet from "react-helmet"

import SEO from "../components/seo"
import Navbar from "../components/navbar/Navbar"

export default function register() {
    return (
        <div>
            <Helmet>
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Roboto+Mono&family=Roboto:wght@400;500;700&display=swap"
                    rel="stylesheet"
                ></link>
            </Helmet>

            <SEO title="Register for DevHack"></SEO><Helmet>
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

        <SEO title="Register for DevHack"></SEO>

        <Navbar></Navbar>
            <br></br>
            <br></br>
            <h1
                style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 700,
                    textAlign: "center",
                    margin: '0rem'
                }}
            >
                DevHack 2020
            </h1>
            <h3
                style={{
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: 300,
                    textAlign: "center",
                    margin: "0rem",
                    padding: "0rem",
                }}
            >
                Organised by DSC KIIT
            </h3>

            <br></br>
            <br></br>

            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSckSjnAnFV-UZW58aTzzL32AI1PT326WEhgAxA2fjIgVQiQSQ/viewform?embedded=true"
                width="100%"
                height="3500"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                scrolling="no"
            >
                Loading…
            </iframe>
        </div>
    )
}
