import React from 'react';
import { connect } from 'react-redux';
import { keyClick } from '../../../redux/actions/key';
import { screenChange } from '../../../redux/actions/screen';
import KeyProps from '../../../interfaces/keyprops';
import { Button } from 'antd';

import "./key.css";

const Key: React.SFC<KeyProps> = (props: KeyProps) => {
    // TODO remove any type
    const handleClick = (e: any) => {
        const keyClickPayLoad = {
            history: props.history,
            do: props.do
        };
        if(props.keyClick && props.screenChange) {
            props.keyClick(keyClickPayLoad);
            props.screenChange('');
        }
        
    }

    return <Button onClick={handleClick} type="primary" className="key">{props.symbol}</Button>
};

const mapStateToProps = (state: any) => ({
    history: state.screen.value
});

const mapDispatchToProps = ({
    keyClick: keyClick,
    screenChange: screenChange
});

export default connect(mapStateToProps, mapDispatchToProps)(Key);