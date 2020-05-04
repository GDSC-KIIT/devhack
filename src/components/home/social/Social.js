import React from 'react'

import './social.css'
import devhacksColour from '../../../images/devhack-colour.svg'
import fb from '../../../images/fb.svg'
import insta from '../../../images/insta.svg'
import twitter from '../../../images/twitter.svg'

export default function Social() {
    return (
        <div className="social-container">
            <div className="links">
                <span>Keep in touch with the latest devhack announcements</span>
                <div className="icon-container">
                    <a href="https://www.instagram.com/dsckiit" target="_blank" rel="noopener">
                        <img src={insta}></img>
                    </a>

                    <a href="https://twitter.com/DscKiit" target="_blank" rel="noopener">
                        <img src={twitter}></img>
                    </a>

                    <a href="https://www.facebook.com/dsckiit/" target="_blank" rel="noopener">
                        <img src={fb}></img>
                    </a>
                </div>
            </div>
            <div className="logo">
                <a href="https://twitter.com/search?q=%23dsckiit" target="_blank" rel="noopener">
                    <div className="img">
                        <span style={{color: '#ff6c00'}}>#</span>
                        <span style={{color: '#ea4235'}}>d</span>
                        <span style={{color: '#4286f5'}}>e</span>
                        <span style={{color: '#109d58'}}>v</span>
                        <span style={{color: '#1ce8b5'}}>h</span>
                        <span style={{color: '#4286f5'}}>a</span>
                        <span style={{color: '#109d58'}}>c</span>
                        <span style={{color: '#fabb04'}}>k</span>
                    </div>
                </a>
            </div>
        </div>
    )
}
