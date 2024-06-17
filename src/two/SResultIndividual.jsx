import React from "react";
import { SearchContext } from "./SearchContext";


export default function SResultIndividual() {
    const { contextData, setPerPage, setLoading } = React.useContext(SearchContext)
    const { perPage, currentPull, loading } = contextData;

// currentPull.data[0].html_url LINK
// currentPull.data[0] RAW TITLE
// currentPull.data[0].user.login USERNAME


    return (
        <div className="big-result-box">
            <h1 className='title'>Insert Cool Title Here</h1>
            <div className='small-result-box'>
                <h2 className='username'>Username</h2>
                <h3 className='link'>this.is.a.legit.website . co m</h3>
            </div>
            <hr></hr>
        </div>
    )
}