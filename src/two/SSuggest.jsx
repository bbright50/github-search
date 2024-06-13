import React from "react";
import { SearchContext } from "./SearchContext";


export default function SSuggest() {
    const { autoSuggest } = React.useContext(SearchContext)

    
    if (autoSuggest) {
        return <h1>Suggest</h1>
    } else {
        return ""
    }
}