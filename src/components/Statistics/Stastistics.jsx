export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
    <ul className="Statistics">
      <li className="statisticsItem">
        Good:<span className="good">{good}</span>
      </li>
      <li className="statisticsItem">
        Neutral:<span className="neutral">{neutral}</span>
      </li>
      <li className="statisticsItem">
        Bad:<span className="bad">{bad}</span>
      </li>
      <li className="statisticsItem">
        Total:<span className="Total">{total}</span>
      </li>
      <li className="statisticsItem">
        Positive feedback:
        <span className="positive">{positivePercentage}%</span>
      </li>
    </ul>
);
