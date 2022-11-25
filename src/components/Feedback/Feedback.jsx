import { Component } from 'react';

export class FeedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    };
    
    handleIncrement = event => {
    console.log(event.target.innerText)
}

  render() {
    return (
      <section className="section">
        <h2 className="sectionTitle">Please leave feedback</h2>
        <div className="btnWrapper">
          <button type="button" className="btnGood" onClick={this.handleIncrement}>
            Good
          </button>
          <button type="button" className="btnNeutral" onClick={this.handleIncrement}>
            Neutral
          </button>
          <button type="button" className="btnBad" onClick={this.handleIncrement}>
            Bad
          </button>
        </div>
        <h3 className="listTitle">Statistics</h3>
        <ul className="Statistics">
          <li className="statisticsItem">
            Good:<span className="good">0</span>
          </li>
          <li className="statisticsItem">
            Neutral:<span className="neutral">0</span>
          </li>
          <li className="statisticsItem">
            Bad:<span className="bad">0</span>
          </li>
        </ul>
      </section>
    );
  }
}
