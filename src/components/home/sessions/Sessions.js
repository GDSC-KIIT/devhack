import React from "react"

import "./sessions.css"

export default function Sessions() {
    return (
        <div className="sessions-container">
            <h3>Exclusive YouTube Sessions by DSC KIIT</h3>
            <div className="videos">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/SZlASPoAgOE"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>

                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/qVBsrMIF6z8"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    )
}
