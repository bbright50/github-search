import React from "react";
import { SearchContext } from "./SearchContext";


export default function SBar() {
    const { perPage, setAutoSuggest, searchValue, setSearchValue } = React.useContext(SearchContext)

    function handleSeachValueChange(e) {
        // would need use effect w/ time delay instead of setSearchValue
        setSearchValue(e.target.value) 
        console.log(searchValue)
        setAutoSuggest(prevAutoSuggest => !prevAutoSuggest)
        // Need to add autosuggest function in here
    }

    return (
        <div>
                <input 
                type="text" 
                placeholder="Enter Search Topic" 
                onChange={handleSeachValueChange}/>
        </div>
    )
}