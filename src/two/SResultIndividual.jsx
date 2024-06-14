import React from "react";
import { SearchContext } from "./SearchContext";


export default function SResultIndividual() {
    const { data, setPerPage, setLoading } = React.useContext(SearchContext)
    const { perPage, currentPull, searchArray } = data;

// currentPull.data[0].html_url LINK
// currentPull.data[0] RAW TITLE
// currentPull.data[0].user.login USERNAME


    return (
        <div className="result-lower-box">
            <h1 className=''>article</h1>
            <div className=''>
                <h2 className=''>name</h2>
                <h3 className=''>link</h3>
            </div>
        </div>
    )
}