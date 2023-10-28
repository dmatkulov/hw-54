import {useState} from 'react';
import GameBoard from '../components/GameBoard/GameBoard.tsx';
import ResetBtn from '../components/ResetBtn/ResetBtn.tsx';
import Counter from '../components/Counter/Counter.tsx';
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
  const [attempt, setAttempt] = useState<number>(0);

  const handleCellClick = (index: number) => {
    const openCells: CellData[] = [...items];

    if (openCells[index].clicked) {
      return;
    }

    openCells[index].clicked = true;
    setItems(openCells);

    setAttempt(prevState => prevState + 1);
  };

  const handleResetClick = () => {
    setItems(createItems);
    setAttempt(0);
  };

  return (
    <div>
      <Counter attempts={attempt}/>
      <GameBoard items={items} handleClick={(index) => handleCellClick(index)}></GameBoard>
      <ResetBtn onClick={handleResetClick}>Reset Game</ResetBtn>
    </div>
  );
};

export default App;
