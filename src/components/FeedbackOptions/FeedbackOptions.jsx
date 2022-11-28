export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="btnWrapper">
    {options.map(key => {
      return (
        <button
          type="button"
          className={key}
            onClick={() => onLeaveFeedback(key)}
             key={key}
        >
          {key}
        </button>
      )})}
  </div>)
};
