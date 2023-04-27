import React from "react";
import { FeedbackBotton } from "./FeedbackOptions.styled";
import Proptypes from "prop-types";



export function FeedbackOptions({ options, onLeaveFeedback }) {
    return(

    <div>
        
        {options.map((option, index) => {
            return (
                <li key={index}>
                    <FeedbackBotton
                        onClick={() => {
                            onLeaveFeedback(option);
                        }}>
                        {option}
                    </FeedbackBotton>
                </li>
            );
        })}
        
    </div>   
    )
};

FeedbackOptions.propTypes ={
    options:Proptypes.arrayOf(Proptypes.string.isRequired)
}