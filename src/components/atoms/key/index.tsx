import React from 'react';
import { Button } from 'antd';

import "./key.css";

interface KeyProps {
    function: string;
    symbol: string;
}

const Key: React.FC<KeyProps> = (props) => {
    return <Button type="primary" className="key">{props.symbol}</Button>
};

export default Key;