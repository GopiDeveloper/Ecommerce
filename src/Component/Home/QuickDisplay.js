import React from 'react';

const QuickDisplay = (props) => {
    const renderMeal = ({quickData}) => {
        if(quickData){
            return quickData.map((item) => {
                return(
                    <div class="card">
                        <img src={item.image} class="card-img-top" alt={item.category} />
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    
                )
            })
        }
       
    }
    return(
        <>
            {renderMeal(props)}
        </>
    )
}
export default QuickDisplay;