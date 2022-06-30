import React, {useEffect, useState} from 'react';
import {endpoint} from "../endpoint";
import useThunkReducer from "../hooks/useThunkReducer";

function SearchCharacters(props) {
    const [query, setQuery] = useState('')

    useEffect(() => {
        fetch(endpoint + '/search' + query)
            .then((response) => response.json())
            .then((response) => {
                '?'
            })
            .catch((error) => {
                "?"
            })
    },[query])

    return (
        <input
            type="search"
            placeholder="Search here"
            value={query}
            onChange={(event) => console.log(event.target.value)}
        />
    );
}

export default SearchCharacters;