import React from 'react';
import { connect } from 'react-redux';
import { keyClick } from '../../../redux/actions/key';
import KeyProps from '../../../interfaces/keyprops';
import KeyType from '../../../interfaces/key';
import KeyClick from '../../../interfaces/keyclick';
import { Button } from 'antd';
import State from '../../../interfaces/state';

import "./key.css";

class Key extends React.Component<KeyProps, State> {
    // TODO remove any type
    handleClick = (e: any) => {
        const keyClickPayLoad = {
            history: this.props.history,
            function: this.props.function
        };
        this.props.keyClick(keyClickPayLoad);
    }

    render (){
        return <Button onClick={this.handleClick} type="primary" className="key">{this.props.symbol}</Button>
    }
}

const mapStateToProps = (state: any) => ({
    history: state.screen.value
});

const mapDispatchToProps = ({
    keyClick: keyClick
});

export default connect(mapStateToProps, mapDispatchToProps)(Key);