/* import React, { Children } from "react" */
import Proptypes from "prop-types"



export function Section({tittle, children}){
    

        return(
            <div>

                <h2>{tittle}</h2>
                {children}
            </div>
        )
        
    
}
Section.propTypes={
    tittle:Proptypes.string

}