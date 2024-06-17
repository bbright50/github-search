import React from "react";
import { SearchContext } from "./SearchContext";


export default function SSuggest() {
    const { contextData } = React.useContext(SearchContext)
    const { perPage, currentPull, loading, autoSuggest } = contextData;


    
    if (autoSuggest) {
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