import React from 'react';
import { Button } from 'antd';

import "./key.css";

interface KeyProps {
    function: string;
}

interface KeyMap {
    [index: string]: string;
}

let keyMap: KeyMap = {
    add: "+",
    subtract: "-",
    divide: "÷",
    clear: "C"
}

const Key: React.FC<KeyProps> = (props) => {
    return <Button type="primary" className="key">{keyMap[props.function]}</Button>
};

export default Key;