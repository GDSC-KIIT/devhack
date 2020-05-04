import React from "react"

import numbergrid from "../../../images/numbergrid.svg"
import semicircle from "../../../images/semicircle.svg"
import triangle from "../../../images/triangle.svg"
import "./info.css"

export default function Info() {
    return (
        <div className="info-container">
            <div className="number-grid">
                <img src={numbergrid}></img>
            </div>

            <div className="text">
                <h3>
                    <span>devhacks</span> brings all the developers together to
                    provide the best solutions for real community issues and
                    also to discuss feasibility.
                </h3>
                <br></br>
                <img src={semicircle}></img>
                <img src={triangle}></img>
            </div>
        </div>
    )
}
