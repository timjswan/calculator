import React from 'react';
import { Input } from 'antd';
import { connect } from 'react-redux';
import { screenChange } from '../../../redux/actions/screen';
import ScreenType from '../../../interfaces/screen';
import ScreenProps from '../../../interfaces/screenprops';
import State from '../../../interfaces/state';

export class Screen extends React.Component<ScreenProps,State> implements ScreenType {
    onChange = (e: React.FormEvent<HTMLInputElement>): void => {
        const { value } = e.currentTarget;

        if(typeof value === "string" && !isNaN(Number(value))) {            
            this.props.screenChange(value);
        }
    };

    render(){
        return <Input placeholder="0" onChange={this.onChange} value={this.props.value} />
    }
}

const mapStateToProps = (state: any) => ({
    value : state.screen.value
});

const mapDispatchToProps = ({
    screenChange: screenChange
});

export default connect(mapStateToProps, mapDispatchToProps)(Screen);