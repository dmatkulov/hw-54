import React from 'react';
import Cell from '../Cell/Cell.tsx';
import {CellData} from '../../types';

interface Props {
  handleClick: (index: number) => void;
  items: CellData[];
}

const GameBoard: React.FC<Props> = ({ items, handleClick }) => {
  const boardStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 50px)',
    gridTemplateRows: 'repeat(6, 50px)',
    gap: '2px',
    padding: '15px',
    border: '1px solid #242424',
  };

  return (
    <div style={boardStyle}>
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