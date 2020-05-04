import React from 'react'

import './footer.css'
import dsckiitLogo from '../../../images/dsckiit-logo.svg'
import kiitLogo from '../../../images/kiit-logo.svg'

export default function Footer() {
    return (
        <footer>
            <div className="logo-container">
                <a href="https://dsckiit.tech/" target="_blank" rel="noopener">
                    <img src={dsckiitLogo}></img>
                </a>
                
                <a href="https://kiit.ac.in/" target="_blank" rel="noopener">
                    <img className="kiit" src={kiitLogo}></img>
                </a>
            </div>
            <h6>
                For any Queries: <a href="mailto:dsckiit@gmail.com">dsckiit@gmail.com</a>
            </h6>
            <br></br>
        </footer>
    )
}
