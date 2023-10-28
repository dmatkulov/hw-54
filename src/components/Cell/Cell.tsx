import React from 'react';

interface Props {
  hasItem: boolean;
  clicked: boolean;
  onClick: React.MouseEventHandler;
}
const Cell: React.FC<Props> = ({hasItem, clicked, onClick}) => {
  const cellStyle = ['cell'];

  if (clicked) {
    cellStyle.push('clicked');
  }

  const ring = hasItem ? 'O' : '';

  return (
    <div
      className={cellStyle.join(' ')}
      onClick={onClick}
    >
      {ring}
    </div>
  );
};

export default Cell;