import React from 'react';
import { connect } from 'react-redux';
import { screenChange } from '../../../redux/actions/screen';
import { Button } from 'antd';
import KeyProps from '../../../interfaces/keyprops';

const Equals: React.SFC<KeyProps> = (props: KeyProps) => {
    const handleClick = () => {
        if(props.do && props.screenChange){
            let res = props.do(Number(props.history), Number(props.currentVal));
            props.screenChange(String(res));
        }
    };

    return <Button onClick={handleClick} type="primary" className="key">=</Button>
};

const mapStateToProps = (state: any) => ({
    history: state.key.history,
    currentVal: state.screen.value,
    do: state.key.do
});

const mapDispatchToProps = ({
    screenChange: screenChange
});

export default connect(mapStateToProps, mapDispatchToProps)(Equals);