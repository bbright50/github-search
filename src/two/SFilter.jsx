import React from "react";
import { SearchContext } from "./SearchContext";



export default function SFilter() {
    const { contextData, setPerPage, setLanguage } = React.useContext(SearchContext)
    const { perPage, currentPull, loading } = contextData;



    function handlePageChange(event) {
        event.preventDefault()
        console.log(event.target.value)
        const { value } = event.target
        setPerPage(value)
    }

    function handleLanguageChange(event) {
        event.preventDefault()
        console.log(event.target.value)
        const { value } = event.target
        setLanguage(value)
    }

    return (
        <>
            <select
                id="language"
                value={""}
                onChange={handleLanguageChange}
                className="s-lang-filter"
                name="language">
                <option value={""} selected>Project Language</option>
                <option value="javascript">Javascript</option>
                <option value="ruby">Ruby</option>
                <option value="nodejs">NodeJS</option>
            </select>
            <select
                id="numPerPage"
                value={10}
                onChange={handlePageChange}
                className="s-filter"
                name="numPerPage">
                <option selected disabled>Results Per Page</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
            </select>
        </>
    )
}