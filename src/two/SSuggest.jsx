import React from "react";
import { useSearchContext } from "./SearchContext";


export default function SSuggest(props) {
    const {
        setPerPage,
        setLoading,
        setCurrentPull,
        setLanguage,
        setSearchValue,
        setAutoSuggest,
        setDisplay,
        display,
        perPage,
        currentPull,
        loading,
        searchValue,
        language,
        autoSuggest } = useSearchContext();



    if (autoSuggest === "") {
        return <></>
    } else {


        return (autoSuggest &&
            <button className="auto-suggest-item" onClick={props.link}>{props.name}</button>
        )
    }
}