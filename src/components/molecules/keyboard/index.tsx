import React from 'react';
import Key from '../../atoms/key';

import "./keyboard.css";

const KeyBoard: React.FC = () => {
    return (
        <div className="keyboard">                    
            <Key function="add" />
            <Key function="subtract" />
            <Key function="divide" />
            <Key function="clear" />
        </div>
    )
};

export default KeyBoard;