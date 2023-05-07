import React from 'react';

export default class Stars extends React.Component {
    constructor(props){
        super(props)
        this.state={
            ratin: props.Ratin
        }
    }
    render(){
        return (
            <div className="l-t-right">{this.state.ratin}&#9734;</div>
        );
    }
}