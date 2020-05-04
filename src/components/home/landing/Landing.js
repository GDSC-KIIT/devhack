import React from 'react'

import './landing.css'

export default function Landing() {
    return (
        <div className="landing-container">
            <div className="text">
                <h1>devhack</h1>
                <pre>2020</pre>
                <p>An online hackathon organised by <span>Developer Student Clubs KIIT </span>
                    which provides a platform for developers to solve real world problems and
                    showcase their solutions to the community. <br></br>
                    DevHack is open to developers from any college 😁
                </p>

                <button className="btn btn-dark">Registrations are closed</button>
            </div>
        </div>
    )
}
