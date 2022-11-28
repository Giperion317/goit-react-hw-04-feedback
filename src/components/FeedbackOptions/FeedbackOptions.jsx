export const FeedbackOptions = ({options, onLeaveFeedback}) => (
        <div className="btnWrapper">
          <button
            type="button"
            className="btnGood"
            onClick={onLeaveFeedback}
          >
            Good
          </button>
          <button
            type="button"
            className="btnNeutral"
            onClick={onLeaveFeedback}
          >
            Neutral
          </button>
          <button
            type="button"
            className="btnBad"
            onClick={onLeaveFeedback}
          >
            Bad
          </button>
        </div>
);