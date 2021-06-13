import React from 'react';
import './Results.css'
import NameCard from './NameCards/NameCards';

const ResultContainer = ({suggestedNames}) => {
    const suggestedNamesJsx = suggestedNames.map(suggestedNames =>{
        return <NameCard key={suggestedNames} suggestedNames = {suggestedNames} />
    })

    return(
        <div className="card-container">{suggestedNamesJsx}</div>
    )
    
}

export default ResultContainer;