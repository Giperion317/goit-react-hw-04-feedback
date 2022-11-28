import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Stastistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = key => {
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  }

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const total = this.countTotalFeedback();
    const options = Object.keys(this.state);
    return (
       <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.onLeaveFeedback}
         />
       </Section>
       <Section title={'Statistics'}>
       {!total ?(
           <Notification message="There is no feedback" />
         ) : (
          <Statistics
             good={this.state.good}
             neutral={this.state.neutral}
             bad={this.state.bad}
             total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
           />
          )}
        </Section>
        </>
    );
  }
}
