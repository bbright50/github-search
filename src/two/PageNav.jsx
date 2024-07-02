import React from "react";
import { useSearchContext } from "./SearchContext";



export default function PageNav() {
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

    // data.headers.link

    function nextPage() {
        setPerPage((prevPerPage) => prevPerPage + 10)
        console.log(perPage)
    }

    function prevPage() {
        setPerPage((prevPerPage) => prevPerPage - 10)
        console.log(perPage)
    }

    return (
        <div className="page-nav-bar">
            {!!perPage && <button className="page-nav" onClick={prevPage}>Previous Page</button>}
            {perPage < 20 && <button className="page-nav" onClick={nextPage}>Next Page</button>}
        </div>
    )
}