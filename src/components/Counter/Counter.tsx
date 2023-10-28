import React from 'react';

interface Props {
  attempts: number;
}
const Counter: React.FC<Props> = ({attempts}) => {
  return (
    <div>
      Tries: {attempts}
    </div>
  );
};

export default Counter;