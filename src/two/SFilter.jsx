import React from "react";
import { SearchContext } from "./SearchContext";



export default function SFilter() {
    const { perPage, setPerPage } = React.useContext(SearchContext)

    
    function handleChange(event) {
        event.preventDefault()
        console.log(event.target.value)
        const {value} = event.target
        setPerPage(value)
    }

    return (
        <select
        id="numPerPage"
        value={10}
        onChange={handleChange}
        name="numPerPage">
            <option selected disabled>Results Per Page</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
        </select>
    )
}