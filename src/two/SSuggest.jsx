import React from "react";
import { useSearchContext } from "./SearchContext";


export default function SSuggest() {
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



    if (autoSuggest) {
        // set objlist or whatever is rendering results to []
        return <h1>Suggest</h1>
    } else {
        return <></>
    }

    // return (
    //     <>
    //         <p>suggested</p>
    //         <p>suggested</p>
    //         <p>suggested</p>
    //         <p>suggested</p>
    //         <p>suggested</p>
    //         <p>suggested</p>
    //     </>
    // )

}