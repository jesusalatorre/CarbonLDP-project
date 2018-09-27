import React from 'react'
import './../../styles/elements/search.css'

const SearchBar = () => (
    <div>
        <div className="searchContainer">
            <div className="searchAreaContainer">
                <div className="searchInput">
                    <input
                        type="text"
                        className="searchBox"
                        placeholder="Busca una pelicula">
                    </input>
                </div>
            </div>
            <div className="searchButtonContainer">
                <button className="searchButton">
                    Buscar
                </button>
            </div>
        </div>
    </div>
)

export default SearchBar