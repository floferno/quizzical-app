import React from 'react'

export default function Homepage(props) {
    return (
        <div className="homepage">
            <h1 className="homepage_title">Harta, Tahta, Trivia</h1>
            <div className="homepage_subtitle">
                <p>No one cares about your harta and tahta until you try our trivia quiz!</p>
                <p>(Joking, bro, but not really!)</p>
            </div>
            <button className="button" onClick={() => props.start()}>Start</button>
        </div>
    )
}
