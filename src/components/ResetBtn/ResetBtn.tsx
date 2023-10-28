import React from 'react';

interface Props extends React.PropsWithChildren{
  onClick: React.MouseEventHandler;
  isActive: boolean;
}
const ResetBtn: React.FC<Props> = ({onClick, isActive, children}) => {
  const buttonClasses = ['ToggleButton'];

  if (isActive) {
    buttonClasses.push('Red');
  }

  return (
    <div>
      <button onClick={onClick} className={buttonClasses.join(' ')}>{children}</button>
    </div>
  );
};

export default ResetBtn;