import React from 'react';

interface Props {
  text: string;
}

const Message: React.FC<Props> = ({text}) => {
  const messageStyle: React.CSSProperties = {
    color: 'sienna',
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px'
  };
  return (
    <div style={messageStyle}>{text}</div>
  );
};

export default Message;