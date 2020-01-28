import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { clear } from '../../../redux/actions/clear';
import KeyProps from '../../../interfaces/keyprops';

const Clear: React.SFC<KeyProps> = (props) => {
    const handleClick = () => {
        if(props.clear){
            props.clear('');
        }
    }
    return <Button onClick={handleClick} type="primary" className="key">C</Button>
};

const mapDispatchToProps = ({
    clear: clear
});

export default connect(null, mapDispatchToProps)(Clear);