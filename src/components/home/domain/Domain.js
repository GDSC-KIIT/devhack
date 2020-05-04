import React from 'react'

import './domain.css'

export default function Domain() {
    return (
        <div className="domain-container">
            <div className="header">
                <h4>Explore Domains</h4>
            </div>

            <div className="text">
                <div className="domain">
                    <span className="healthcare">Healthcare</span>
                    <p>Problems on healthcare issues faced by the community eg: HIV, Corona Outbreak etc.</p>
                </div>

                <div className="domain">
                    <span className="environment">Environment</span>
                    <p>Problems on environmental issues faced by the community eg: Climate Change, Landslides etc.</p>
                </div>

                <div className="domain">
                    <span className="education">Education</span>
                    <p>Problems on issues with education faced by the community eg: issues of unavailable educational resources due to language barriers etc.</p>
                </div>

                <div className="domain">
                    <span className="transport">Transport</span>
                    <p>Problems on transport issues faced by the community eg: traffic, congestion etc.</p>
                </div>
            </div>
        </div>
    )
}
