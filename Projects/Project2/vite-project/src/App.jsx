import { useState } from 'react'
import Card from './components/Card'
import './App.css'

const cardData = [
  { question: 'What is the capital of France?', answer: 'Paris' },
  { question: 'What is the capital of Germany?', answer: 'Berlin' },
  { question: 'What is the capital of Italy?', answer: 'Rome' },
  { question: 'What is the capital of Japan?', answer: 'Tokyo' },
  { question: 'What is the capital of Russia?', answer: 'Moscow' },
  { question: 'What is the capital of Australia?', answer: 'Canberra' },
  { question: 'What is the capital of Canada?', answer: 'Ottawa' },
  { question: 'What is the capital of Brazil?', answer: 'Brasília' },
  { question: 'What is the capital of India?', answer: 'New Delhi' },
  { question: 'What is the capital of South Africa?', answer: 'Pretoria' },
  { question: 'What is the capital of Egypt?', answer: 'Cairo' },
  { question: 'What is the capital of China?', answer: 'Beijing' },
  { question: 'What is the capital of Argentina?', answer: 'Buenos Aires' },
];

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isQuestion, setIsQuestion] = useState(false);

  const handleCardClick = () => {
    setIsQuestion(!isQuestion);
  };

  const handleNextClick = () => {
    const nextCardIndex = Math.floor(Math.random() * cardData.length);
    setCurrentCardIndex(nextCardIndex);
    setIsQuestion(true);
  };

  return (
    <div className="app">
      <div className="card-container">
        <h1>Geography Trip</h1>
        <p>How good of a geographer are you? Test all of your Country knowledge here!</p>
        <p>Number of Cards: {cardData.length} </p> 
        <Card
          content={isQuestion ? cardData[currentCardIndex].question : cardData[currentCardIndex].answer}
          onClick={handleCardClick}
        />
        <button className="next-button" onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
}

export default App;