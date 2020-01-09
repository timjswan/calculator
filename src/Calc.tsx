import React from 'react';
import { Button, Input } from 'antd';
import './Calc.css';

export default class Calc extends React.Component {
    render(){
        return (
            <div className="Calc">
                <h1>Tim's Calc</h1>
                <Input placeholder="0" />
                <div className="keyboard">                    
                    <Button type="primary" className="key">+</Button>
                    <Button type="primary" className="key">-</Button>
                    <Button type="primary" className="key">/</Button>
                    <Button type="primary" className="key">C</Button>
                </div>
            </div>
        );
    }
}