import React from "react"
import { Link } from "gatsby"

import "./navbar.css"

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
                dev hack
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/schedule" className="nav-link">Schedule</Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link to="/rules" className="nav-link">Rules</Link>
                    </li>
                </ul>
                <span className="navbar-text">
                    <Link to="/leaderboard" style={{ marginRight: '0.5rem', color: 'white'}} className="btn btn-primary">
                        <i className="fas fa-chart-area" style={{marginRight: '0.5rem'}}></i>
                        Leaderboard
                    </Link>
                    
                    <Link to="/login" style={{ marginRight: '0.5rem', color: 'white'}} className="btn btn-primary">
                        <i className="fas fa-user" style={{marginRight: '0.5rem'}}></i>
                        Login
                    </Link>
                </span>
            </div>
        </nav>
    )
}
