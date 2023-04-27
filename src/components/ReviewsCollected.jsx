import React from "react";
import { Component } from "react";
import { Statistics } from "./Statistics";
import { FeedbackOptions } from "./FeedbackOptions";
import { Section } from "./Section";
import {Notification} from "./Notification"
class ReviewsCollected extends Component {
    constructor(props) {
        super(props);

        this.state = {
            good: 0,
            neutral: 0,
            bad: 0,
        };
    }
    incrementGood() {
        this.setState({
            good: this.state.good + 1,
        });
    }
    incrementNeutral() {
        this.setState({
            neutral: this.state.neutral + 1,
        });
    }
    incrementBad() {
        this.setState({
            bad: this.state.bad + 1,
        });
    }
    countTotalFeedback = () => {
        let totale = this.state.good + this.state.neutral + this.state.bad;
        return totale;
    };
    countPositiveFeedbackPercentage() {
        let percent = Math.round(
            (this.state.good /
                (this.state.good + this.state.neutral + this.state.bad)) *
                100
        );
        return percent;
    }

    leaveFeedback = (option) => {
        this.setState((prevState) => ({
            [option]: prevState[option] + 1,
        }));
    };
    render() {
        /* const {good, neutral, bad}=this.state;  */
        const keys = Object.keys(this.state);

        return (
            <div>
                <Section tittle="Please leave a feedback">
                    <FeedbackOptions
                        options={keys}
                        onLeaveFeedback={this.leaveFeedback}
                    />
                </Section>

                {/* <button onClick={event => this.incrementGood(event)}>Good</button>
                <button onClick={event => this.incrementNeutral(event)}>Neutral</button>
                <button onClick={event => this.incrementBad(event)}>Bad</button> */}

                <Section tittle="Statistics">
                  {this.countTotalFeedback()===0?(<Notification message="There is no feedback"></Notification>):
                  <Statistics
                  good={this.state.good}
                  neutral={this.state.neutral}
                  bad={this.state.bad}
                  total={this.countTotalFeedback()}
                  positivePercentage={this.countPositiveFeedbackPercentage()}
              />
                  }
                    
                </Section>
            </div>
        );
    }
}

export default ReviewsCollected;
