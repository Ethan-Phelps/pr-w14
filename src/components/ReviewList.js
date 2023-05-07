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
        let data=JSON.stringify(childData).toString();
        alert(data);
        //this.setState({name: childData})
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