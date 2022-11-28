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

  onLeaveFeedback = event => {
    if (event.target.textContent === 'Good') {
      this.setState(prevState => ({ good: prevState.good + 1 }));
    }
    if (event.target.textContent === 'Neutral') {
      this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
    }
    if (event.target.textContent === 'Bad') {
      this.setState(prevState => ({ bad: prevState.bad + 1 }));
    }
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={this.options}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <h3 className="listTitle">Statistics</h3>
        {this.countTotalFeedback() > 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    );
  }
}
