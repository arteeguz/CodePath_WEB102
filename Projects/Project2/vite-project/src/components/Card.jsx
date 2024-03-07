import React from 'react';
import '../styles/Card.css';

function Card({ content, onClick, imageUrl }) {
  return (
    <div className="card" onClick={onClick}>
      {imageUrl && <img src={imageUrl} alt="" className="card-image" />}
      <p>{content}</p>
    </div>
  );
}

export default Card;
