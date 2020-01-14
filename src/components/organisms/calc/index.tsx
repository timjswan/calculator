import React from 'react';
import KeyBoard from '../../molecules/keyboard';
import Screen from '../../molecules/screen';

import './calc.css';

export default class Calc extends React.Component {
    render(){
        return (
            <div className="calc">
                <h1>Tim's Calc</h1>
                <Screen />
                <KeyBoard />
            </div>
        );
    }
}