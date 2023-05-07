import React from 'react';
import ReviewList from './ReviewList';
import Stars from './Stars';

export default class Movie extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title: props.Title,
            image: props.Image,
            synop: props.Synop,
            ratin: props.Ratin||"?"
        }
    }
    render(){
        let reviews = [{FName:"example name",FReve:"example review",FRate:"3"},{FName:"example name",FReve:"example review",FRate:"4"},{FName:"example name",FReve:"example review",FRate:"5"}]
        return (
            <div className="row">
                <div className="left">
                    <div className="l-top"><div className="l-t-left">{this.state.title}</div><Stars Ratin={this.state.ratin}/></div>
                    <div className="l-bottom">
                        <div className="l-b-left"><img src={this.state.image} alt=""/></div>
                        <div className="l-b-right"><p>Synopsis:</p><br/><br/>{this.state.synop}</div>
                    </div>
                </div><ReviewList {...{reviews:reviews}}/>
            </div>
        );
    }
}