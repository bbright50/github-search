import React from "react";
import { SearchContext } from "./SearchContext";
import lodash from "lodash"

export default function SBar() {
    const { contextData, setAutoSuggest, setSearchValue } = React.useContext(SearchContext)
    const { perPage, currentPull, loading, searchValue } = contextData;


    let debounce_func = lodash.debounce(function (e) {
        console.log(e.target.value)
        setSearchValue(e.target.value);
        console.log(searchValue)
    }, 1000);


    // function handleSeachValueChange(e) {
    //     setSearchValue(e.target.value)
    //     console.log(searchValue)
    // }

    // pass debounce into onchange function with the value of the typed in text

    return (
        <div>
            <input
                type="text"
                placeholder="Enter Search Topic"
                className="s-bar"
                onChange={debounce_func} />
        </div>
    )
}