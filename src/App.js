// src/App.js
import React from 'react';
import Card from './Card';
import './App.css';
import luffyImage from './Images/luffy.jpeg';
import zoroImage from './Images/zoro.jpeg';
import sanjiImage from './Images/sanji.jpeg';

function App() {
  return (
    <div className="App">
      <h1>ONEPIECE</h1>
      <div className="card-container">
        <Card
          title="One Piece"
          description="Pirate king luffy"
          imageUrl={luffyImage}
        />
        <Card
          title="One Piece"
          description="Pirate hunter zoro"
          imageUrl={zoroImage}
        />
        <Card
          title="One Piece"
          description="Black leg sanji"
          imageUrl={sanjiImage}
        />
      </div>
    </div>
  );
}

export default App;