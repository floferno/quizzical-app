import './App.css';
import blob1 from './images/blue-blob.svg'
import blob2 from './images/yellow-blob.svg'
import Button from './components/Button'

function App() {
  return (
    <div className="main">
      <img src={blob2} className="yellow-blob" alt="Yellow Background" />
      <div className="main-text">
        <h1 className="main-text_title">Quest of Questions</h1>
        <div className="main-text_paragraph">
          <p>Getting into tech industry doesn't make you feel dumb enough?</p>
          <p>Take these quizzes and check out if you are just dumb or DUMB dumb!</p>
        </div>
        <Button />
      </div>
      <img src={blob1} className="blue-blob" alt="Blue Background" />
    </div >
  );
}

export default App;
