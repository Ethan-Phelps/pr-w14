import React from 'react';
import ReviewForm from './ReviewForm';
import Review from './Review';

export default class ReviewList extends React.Component {
    constructor(props){
        super(props)
        this.state={
            reviews:props.reviews,
        }
    }
    handleCallback = (childData) =>{
        let data=JSON.parse(JSON.stringify(childData));
        this.setState({FName:data["fname"],FReve:data["freve"],FRate:data["frate"]})//doesn't work
    }
    render(){
        let reviews=[];
        if (this.state.reviews){
            for(let review of this.state.reviews){
                reviews.push(<Review {...review}/>);
            }
        }
        return (
            <div className="right">
                <div className="r-top">
                    <ReviewForm parentCallback = {this.handleCallback}/>
                </div>
                <div className="r-bottom">
                    {reviews}
                </div>
            </div>
        );
    }
}