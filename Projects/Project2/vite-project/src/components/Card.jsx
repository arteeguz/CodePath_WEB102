import React from 'react'
import '../styles/Card.css'

function Card({ content, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <p>{content}</p>
    </div>
  );
}

export default Card;
