import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={style.btnWrapper}>
    {options.map(key => {
      return (
        <button
          type="button"
          className={style.btn}
            onClick={() => onLeaveFeedback(key)}
             key={key}
        >
          {key}
        </button>
      )})}
  </div>)
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}