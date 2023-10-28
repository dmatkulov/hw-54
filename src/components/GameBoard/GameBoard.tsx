import React from 'react';
import Cell from '../Cell/Cell.tsx';
import {CellData} from '../../types';
import './GameBoard.css';

interface Props {
  handleClick: (index: number) => void;
  items: CellData[];
}

const GameBoard: React.FC<Props> = ({ items, handleClick }) => {
  return (
    <div className="board">
      {items.map((item, index: number) => (
        <Cell
          key={index}
          hasItem={item.hasItem}
          clicked={item.clicked}
          onCellClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default GameBoard;