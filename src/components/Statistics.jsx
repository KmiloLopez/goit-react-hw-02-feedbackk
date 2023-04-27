import Proptypes from "prop-types";

export function Statistics ({good, neutral, bad, total, positivePercentage}){
    return(
        <div>
            <p>Good:{good}</p>
                <p>Neutral:{neutral}</p>
                <p>Bad:{bad}</p>

                <p>Total:{total}</p>
                <p>Positive feedback:{positivePercentage}%</p>
        </div>
    )

}
Statistics.propTypes = {
    good: Proptypes.number,
    neutral: Proptypes.number,
    bad: Proptypes.number,
    total: Proptypes.number,
    positivePercentage: Proptypes.number,
  
};
