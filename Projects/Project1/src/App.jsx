import React from 'react';
import Card from './components/Card';
import './App.css';

function App() {

  const pizzaPlaces = [
    {
      id: 1,
      name: 'Ciro Pizza Cafe',
      imageUrl: './Photos/1.jpg', 
      websiteUrl: 'https://www.ciropizzacafes.com',
    },
    {
      id: 2,
      name: 'La Piazza Pizzaria',
      imageUrl: './Photos/2.jpeg',
      websiteUrl: 'http://www.lapiazzasi.com/',
    },
    {
      id: 3,
      name: 'The Pizza Parlor',
      imageUrl: './Photos/3.jpeg', 
      websiteUrl: 'http://www.pizzaparlorny.com/',
    },
    {
      id: 4,
      name: 'Seppe Pizza',
      imageUrl: './Photos/4.jpeg', 
      websiteUrl: 'http://www.pier76si.com/',
    },
    {
      id: 5,
      name: 'Pier 76',
      imageUrl: './Photos/5.jpeg', 
      websiteUrl: 'http://www.pizzaplace1.com',
    },
    {
      id: 6,
      name: 'Ungaro Pizza',
      imageUrl: './Photos/6.jpeg', 
      websiteUrl: 'https://www.ungarocoalfiredpizzacafe.com/',
    },
    {
      id: 7,
      name: 'Jimmy Max',
      imageUrl: './Photos/7.jpeg', 
      websiteUrl: 'http://jimmymax.com/',
    },
    {
      id: 8,
      name: 'Campania Pizza',
      imageUrl: './Photos/8.jpg', 
      websiteUrl: 'https://campaniacoalfiredpizza.com/',
    },
    {
      id: 9,
      name: 'Bravo Pizza',
      imageUrl: './Photos/9.jpg', 
      websiteUrl: 'https://bravopizzasi.com/',
    },
    {
      id: 10,
      name: 'Via Ponte Pizza',
      imageUrl: './Photos/10.jpg',
      websiteUrl: 'https://www.viaponte-pizza.com/',
    },
  ];
  return (
    <div className="App">
      <h1>Staten Island Pizza Favorites</h1>
      <div className="card-grid">
        {pizzaPlaces.map((place, index) => (
          <Card
            key={index}
            name={place.name}
            imageUrl={place.imageUrl}
            websiteUrl={place.websiteUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
