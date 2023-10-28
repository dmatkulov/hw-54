import React, {useState} from 'react';
import GameBoard from '../components/GameBoard/GameBoard.tsx';
import {CellData} from '../types';
import './App.css';

const createItems = () => {
  const items: CellData[] = [];
  for (let i = 0; i < 36; i++) {
    items.push({hasItem: false, clicked: false});
  }
  const randomIndex = Math.floor(Math.random() * items.length);
  items[randomIndex].hasItem = true;
  return items;
};

const App = () => {
  const [items, setItems] = useState<CellData[]>(createItems());

  const handleCellClick = (index: number) => {
    const updatedItems: CellData[] = [...items];
    updatedItems[index].clicked = true;
    setItems(updatedItems);
  };


  return (
    <div>
      <GameBoard items={items} handleClick={(index) => handleCellClick(index)}></GameBoard>
    </div>
  );
};

export default App;
