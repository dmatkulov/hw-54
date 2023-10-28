import React from 'react';

interface Props {
  hasItem: boolean;
  clicked: boolean;
  onCellClick: React.MouseEventHandler;
}
const Cell: React.FC<Props> = ({hasItem, clicked, onCellClick}) => {
  const cellStyle = ['cell'];

  if (clicked) {
    cellStyle.push('clicked');
  }

  const ring = hasItem ? 'O' : '';

  return (
    <div
      className={cellStyle.join(' ')}
      onClick={onCellClick}
    >
      {ring}
    </div>
  );
};

export default Cell;