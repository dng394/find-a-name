import React from 'react';
import './SearchBox.css';

// Will call whenever user types something 
const SearchBox = ({ onInputChange }) => {
    return (
        <div className="search-container">
            <input
                onChange={(event) => onInputChange(event.target.value)}
                placeholder="Type keywords"
                className="search-input"
            />
        </div>
    )
}

export default SearchBox;