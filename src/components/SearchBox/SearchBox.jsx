import React from 'react';
import './SearchBox.css';
const SearchBox = ({onInputChange}) => {
    return(
        <div className = "search-box">
            <input onChange = {(event) => onInputChange(event.target.value)} className="search-input" placeholder = "Enter Keywords" />
        </div>
    )
}

export default SearchBox;