import React from 'react'
import { nanoid } from 'nanoid'

export default function Quiz(props) {
    function changeStyle(option, index) {
        if (props.showAnswers === true) {
            if (props.question.correct_answer === option) {
                return ({ backgroundColor: "#94D7A2" })
            } else if (props.question.selected_answer === index) {
                return ({ backgroundColor: "#F8BCBC" })
            } else {
                return ({ backgroundColor: "#F5F7FB" })
            }
        } else {
            return (props.question.selected_answer === index ? { backgroundColor: "#D6DBF5" } : { backgroundColor: "#F5F7FB" })
        }
    }

    const optionsElement = props.question.options.map((option, index) => <button
        key={index}
        dangerouslySetInnerHTML={{ __html: option }}
        onClick={(event) => props.selectAnswer(event, props.id, index)}
        style={changeStyle(option, index)}
        disabled={props.showAnswers}
        className='quiz-container-options'
    />)

    return (
        <div className="quiz-page">
            <div className="quiz-container">
                <h1 className="quiz-container_question" dangerouslySetInnerHTML={{ __html: props.question.question }}></h1>
                <div className="quiz-container_options">
                    <div className="quiz-container_option">{optionsElement}</div>
                </div>
            </div>
        </div >
    )
}