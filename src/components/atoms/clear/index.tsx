import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { screenChange } from '../../../redux/actions/screen';
import KeyProps from '../../../interfaces/keyprops';

const Clear: React.SFC<KeyProps> = (props) => {
    const handleClick = () => {
        if(props.screenChange){
            props.screenChange('');
        }
    }
    return <Button onClick={handleClick} type="primary" className="key">C</Button>
};

const mapDispatchToProps = ({
    screenChange: screenChange
});

export default connect(null, mapDispatchToProps)(Clear);