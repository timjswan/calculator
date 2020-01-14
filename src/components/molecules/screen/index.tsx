import React from 'react';
import { Input } from 'antd';
import { connect } from 'react-redux';
import { screenChange } from '../../../redux/actions/screen';
import ScreenType from '../../../interfaces/screen';
import ScreenProps from '../../../interfaces/screenprops';
import State from '../../../interfaces/state';

export class Screen extends React.Component<ScreenProps,State> implements ScreenType {
    constructor(props: ScreenProps){
        super(props);
        this.state = {
            value: ''
        };
    }

    onChange = (e: React.FormEvent<HTMLInputElement>): void => {
        const { value } = e.currentTarget;

        if(typeof value === "string" && !isNaN(Number(value))) {            
            this.props.screenChange(value);
            this.setState({value});
            /* this.setState(prevState => {
                let history = (prevState.value !== '') ? prevState.value : '0';
                
                return{
                    value: value,
                    history: history
                }
            }); */
        }
    };

    render(){
        return <Input placeholder="0" onChange={this.onChange} value={this.state.value} />
    }
}

export default connect(
    null,
    {
        screenChange: screenChange
    }
)(Screen);