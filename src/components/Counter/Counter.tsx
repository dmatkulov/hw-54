import React from 'react';

interface Props {
  attempts: number;
}

const Counter: React.FC<Props> = ({attempts}) => {
  const counterStyle: React.CSSProperties = {
    marginBottom: '40px',
    fontSize: '24px',
    paddingBottom: '20px',
    borderBottom: '1px solid #ececec',
    color: 'gray'
  };

  if (attempts > 0) {
    counterStyle.color = 'black';
    counterStyle.fontWeight = 'bold';
  }

  return (
    <div style={counterStyle}>
        Tries: {attempts}
    </div>
  );
};

export default Counter;