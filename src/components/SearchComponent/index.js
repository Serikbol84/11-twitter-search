import React, { useState } from 'react';
import "./style.css";

const SearchMenu = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
        onSearch(event.target.value);
    };

    return (
        <div className="mt-3 mx-3 search-menu">
            <input 
                type="search"
                value={query}
                onChange={handleInputChange}
                placeholder="Search Twitter"
                className="search-field"
                style={{ backgroundColor: "whitesmoke", border: 'none', borderRadius: 20 }}
            />
        </div>
    );
};

export default SearchMenu;
