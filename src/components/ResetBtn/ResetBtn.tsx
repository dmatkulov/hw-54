import React from 'react';

interface Props extends React.PropsWithChildren {
    onClick: React.MouseEventHandler;
    attempts: number;
}

const ResetBtn: React.FC<Props> = ({onClick, attempts, children}) => {
    const buttonStyle: React.CSSProperties = {
        marginTop: '40px',
        border: 'none',
        padding: '14px 20px',
        backgroundColor: 'lavender',
        color: 'blue',
    };

    if (attempts > 0) {
        buttonStyle.backgroundColor = 'blue';
        buttonStyle.color = 'white';
    }

    return (
        <div>
            <button onClick={onClick} style={buttonStyle}>{children}</button>
        </div>
    );
};

export default ResetBtn;