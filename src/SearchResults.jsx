import React, { useContext } from "react";
import { SearchContext } from "./SearchContext";

const SearchResults = () => {
    const { searchQuery, searchResults } = useContext(SearchContext);

    return (
        <div>
            <h2>Search Results for "{searchQuery}"</h2>
            {searchResults.length === 0 ? (
                <p>No products found</p>
            ) : (
                searchResults.map(product => (
                    <div key={product.id}>
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default SearchResults;
