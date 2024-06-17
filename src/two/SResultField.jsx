import React from "react";
import SResultIndividual from "./SResultIndividual";
import { SearchContext } from "./SearchContext";

export default function SResultField() {
    const { contextData } = React.useContext(SearchContext)
    const { perPage, currentPull, loading } = contextData;



    return (
        <div>
            <SResultIndividual />
            <SResultIndividual />
            <SResultIndividual />
            <SResultIndividual />
            <SResultIndividual />
            <SResultIndividual />
            
        </div>
    )
}