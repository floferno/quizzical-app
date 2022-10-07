import React from 'react'

export default function Homepage(props) {
    return (
        <div className="homepage">
            <h1 className="homepage_title">Quizzical</h1>
            <div className="homepage_subtitle">
                <p>"Let's get quizzical!" Dua Lipa said.</p>
            </div>
            <button className="button" onClick={() => props.start()}>Start</button>
        </div>
    )
}
