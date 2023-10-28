import React from 'react';

interface Props extends React.PropsWithChildren{
  onClick: React.MouseEventHandler;
}
const ResetBtn: React.FC<Props> = ({onClick, children}) => {
  const buttonClasses = ['ToggleButton'];


  return (
    <div>
      <button onClick={onClick} className={buttonClasses.join(' ')}>{children}</button>
    </div>
  );
};

export default ResetBtn;