import PropTypes from 'prop-types';
import style from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
    <ul className={style.statistics}>
      <li className={style.item}>
        Good:<span className={style.good}>{good}</span>
      </li>
      <li className={style.item}>
        Neutral:<span className={style.neutral}>{neutral}</span>
      </li>
      <li className={style.item}>
        Bad:<span className={style.bad}>{bad}</span>
      </li>
      <li className={style.item}>
        Total:<span className={style.total}>{total}</span>
      </li>
      <li className={style.item}>
        Positive feedback:
        <span className={style.good}>{positivePercentage}%</span>
      </li>
    </ul>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total:PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}

