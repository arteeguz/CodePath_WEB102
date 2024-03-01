import React from 'react';
import '../styles/Card.css'; 

const Card = ({ name, imageUrl, websiteUrl }) => {
    return (
      <div className="card">
        <img src={imageUrl} alt={name} className="card-image" />
        <h2>{name}</h2>
        <a href={websiteUrl} className="card-button" target="_blank" rel="noopener noreferrer">View Menu</a>
      </div>
    );
  };

export default Card;
