import { Component } from "react";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <section className="section">
        <h2 className="sectionTitle">Please leave feedback</h2>
        <div className="btnWrapper">
          <button
            type="button"
            className="btnGood"
            onClick={() =>
              this.setState(prevState => ({ good: prevState.good + 1 }))
            }
          >
            Good
          </button>
          <button
            type="button"
            className="btnNeutral"
            onClick={() =>
              this.setState(prevState => ({ neutral: prevState.neutral + 1 }))
            }
          >
            Neutral
          </button>
          <button
            type="button"
            className="btnBad"
            onClick={() =>
              this.setState(prevState => ({ bad: prevState.bad + 1 }))
            }
          >
            Bad
          </button>
        </div>
        <h3 className="listTitle">Statistics</h3>
        <ul className="Statistics">
          <li className="statisticsItem">
            Good:<span className="good">{this.state.good}</span>
          </li>
          <li className="statisticsItem">
            Neutral:<span className="neutral">{this.state.neutral}</span>
          </li>
          <li className="statisticsItem">
            Bad:<span className="bad">{this.state.bad}</span>
          </li>
          <li className="statisticsItem">
            Total:<span className="Total">{this.countTotalFeedback()}</span>
          </li>
          <li className="statisticsItem">
            Positive feedback:
            <span className="positive">
              {this.countPositiveFeedbackPercentage() || 0}%
            </span>
          </li>
        </ul>
      </section>
    );
  }
}
