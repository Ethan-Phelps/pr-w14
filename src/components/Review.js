import React from 'react';
import Stars from './Stars';

export default class Review extends React.Component {
    constructor(props){
        super(props)
        this.state={
            fname: props.FName,
            freve: props.FReve,
            frate: props.FRate,
        }
    }
    render(){
        return (
            <div className="row2">
                <div className="rhead">{this.state.fname}</div>
                <div className="rleft">
                {this.state.freve}
                </div>
                <div className="rright"><Stars Ratin={this.state.frate}/></div>
            </div>
        );
    }
}