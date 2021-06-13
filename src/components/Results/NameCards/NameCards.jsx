import React from 'react';
import './NameCards.css';

const nameCheapurl = 'https://www.namecheap.com/domains/registration/results/?domain='

const NameCard = ({suggestedNames}) => {
    return(
        <a target="_blank" className="card-link" href={`${nameCheapurl}${suggestedNames}`} rel="noreferrer">
            <div className="result-name-card">
            <p className="result-name">{suggestedNames}</p>
        </div>
        </a>
    );
}

export default NameCard;