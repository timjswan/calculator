import React from 'react';
import Key from '../../atoms/key';
import Equals from '../../atoms/equals';
import Clear from '../../atoms/clear';
import KeyBoardFunctions from '../../../interfaces/keyboardfunctions';
import { keyBoardFunctions } from './functions';
import State from '../../../interfaces/state';

import "./keyboard.css";

export default class KeyBoard extends React.Component<State> {
    render(){
        const kfs = keyBoardFunctions.map((kf: KeyBoardFunctions) => {
            return <Key key={kf.name} function={kf.name} symbol={kf.symbol} do={kf.do} />
        });

        return (
            <div className="keyboard">                    
                {kfs}
                <Equals />
                <Clear />
            </div>
        )
    }
}