import './App.css';
import blob1 from './images/blue-blob.svg'
import blob2 from './images/yellow-blob.svg'
import Quiz from './components/Quiz'
import Homepage from './components/Homepage'
import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid';

function App() {
  const [started, setStarted] = useState(true)
  const [score, setScore] = useState(0)
  const [showAnswers, setShowAnswers] = useState(false)
  const [allComplete, setAllComplete] = useState(false)
  const [questions, setQuestions] = useState([])

  function start() {
    setStarted(prevState => !prevState)
  }

  function playAgain() {
    setStarted(true)
    setShowAnswers(false)
    setAllComplete(false)
  }

  function checkAnswers() {
    setShowAnswers(true)
  }

  function selectAnswer(question_id, option_id) {
    setQuestions(prev => {
      return (questions.map((question, qid) => {
        if (question_id === qid) {
          return ({ ...question, selected_answer: option_id })
        } else {
          return (question)
        }

      }))
    })
  }

  useEffect(() => {
    var count = 0;
    for (var i = 0; i < questions.length; i++) {
      if (!questions[i].selected_answer) {
        if (questions[i].options[questions[i].selected_answer] === questions[i].correct_answer) {
          count++;
        }
      }
    }
    setScore(count)
  }, [showAnswers])

  function handleClickAnswer(id, answer) {
    setQuestions(questions => questions.map(question => {
      return question.id === id ? { ...question, selected: answer } : question
    }))
  }

  useEffect(() => {

    if (!started) {

      fetch("https://opentdb.com/api.php?amount=5")
        .then(res => res.json())
        .then(data => setQuestions(data.results.map(function (question) {
          return ({
            question: question.question,
            options: question.incorrect_answers.concat([question.correct_answer]).map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value),
            selected_answer: undefined,
            correct_answer: question.correct_answer
          })
        })))
    }
  }, [started])

  useEffect(() => {
    setAllComplete(questions.every((quest) => typeof quest.selected_answer !== 'undefined'))
  }, [questions])

  const questionElement = questions ? questions.map(question => {
    return (
      <Quiz
        key={nanoid()}
        question={question}
        showAnswers={showAnswers}
        selectAnswer={selectAnswer}
        id={question.id}
      />
    )
  }) : []


  return (
    <div className="main">
      <img src={blob1} className="blue-blob" alt="Blue Background" />
      <div className="quiz-container">
        {started ? <Homepage start={start} /> :
          <div className="quiz-container_q">
            {questionElement}
            {showAnswers ?
              <div className='button-container'>
                <h3 className='button-container-score'>{"You scored " + score + "/5 correct answers"}</h3>
                <button className='button' >Play Again</button>
              </div>
              :
              <button className='button' disabled={!allComplete} >Check Answers</button>}
          </div>
        }
      </div>
      <img src={blob2} className="yellow-blob" alt="Yellow Background" />

    </div>
  );
}

export default App;
