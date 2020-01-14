import React from 'react';
import Key from '../../atoms/key';
import { connect } from 'react-redux';
import { calcFunctionClick } from '../../../redux/actions/keyboard';
import KeyBoardFunctions from '../../../interfaces/keyboardfunctions';
import KeyBoardProps from '../../../interfaces/keyboardprops';
import { keyBoardFunctions } from './functions';
import State from '../../../interfaces/state';

import "./keyboard.css";

export class KeyBoard extends React.Component<KeyBoardProps,State> {
    constructor(props: KeyBoardProps){
        super(props);
        this.state = {
            history: '',
            function: ''
        };
    }

    render(){
        const keyBoardFunctionss = keyBoardFunctions.map((kf: KeyBoardFunctions) => {
            return <Key key={kf.name} function={kf.name} symbol={kf.symbol} />
        });

        return (
            <div className="keyboard">                    
                {keyBoardFunctionss}
            </div>
        )
    }
}

export default connect(
    null,
    {
        calcFunctionClick: calcFunctionClick
    }
)(KeyBoard);