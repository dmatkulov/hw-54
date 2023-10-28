import React from 'react';
import Cell from '../Cell/Cell.tsx';
import {CellData} from '../../types';

interface Props {
  onCellClick: React.MouseEventHandler;
  items: CellData[];
}

const GameBoard: React.FC<Props> = ({ items, onCellClick }) => {
  return (
    <div className="board">
      {items.map((item, index) => (
        <Cell
          key={index}
          hasItem={item.hasItem}
          clicked={item.clicked}
          onClick={() => onCellClick}
        />
      ))}
    </div>
  );
};

export default GameBoard;