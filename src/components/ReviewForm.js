import React from 'react';

export default class ReviewForm extends React.Component {
    onTrigger = (event) => {
        this.props.parentCallback({fname:event.target.fname.value,frate:event.target.frate.value,freve:event.target.freve.value});
    }
    render(){
        return (
            <div>
                <span>Leave a Review:</span>
                <form className="rform" onSubmit = {this.onTrigger}>
                    <div className="fleft">
                        <input required placeholder="your name" type="text" name="fname"/><br/>
                        <select required name="frate">
                        <option value="?" selected disabled>select a rating</option>
                        <option value="5">5&#9734;</option>
                        <option value="4">4&#9734;</option>
                        <option value="3">3&#9734;</option>
                        <option value="2">2&#9734;</option>
                        <option value="1">1&#9734;</option>
                        <option value="0">0&#9734;</option>
                        </select><br/>
                        <button type="submit">Submit</button>
                    </div>
                    <textarea className="fright" required placeholder="enter your review" name="freve"/>
                </form>
            </div>
        );
    }
}