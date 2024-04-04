import React from 'react';
import './searchBar.css';

export default function SearchBar() {
    return (
        <form className="search-form">
            <input type="search" placeholder="Search here ..." />
            <i className="fa fa-search"></i>
        </form>
    );
}