import {useState} from 'react';
import GameBoard from '../components/GameBoard/GameBoard.tsx';
import ResetBtn from '../components/ResetBtn/ResetBtn.tsx';
import Counter from '../components/Counter/Counter.tsx';
import Message from '../components/Message/Message.tsx';
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
  const [found, setFound] = useState<boolean>(false);

  const handleCellClick = (index: number) => {
    const openCells: CellData[] = [...items];

    openCells[index].hasItem ? setFound(true) : false;

    if (openCells[index].clicked) {
      return;
    } else {
      openCells[index].clicked = true;
    }

    setItems(openCells);
    setAttempt((prevState) => {
      if (found) {
        openCells[index].clicked = false;
        return prevState;
      }
      return prevState + 1;
    });
  };

  const handleResetClick = () => {
    setItems(createItems);
    setAttempt(0);
    setFound(false);
  };

  return (
    <div>
      <Counter attempts={attempt}/>
      {found ? (<Message text="Ring found!"/>) : null}
      <GameBoard items={items} handleClick={(index) => handleCellClick(index)}></GameBoard>
      <ResetBtn onClick={handleResetClick} attempts={attempt}>Reset Game</ResetBtn>
    </div>
  );
};

export default App;
