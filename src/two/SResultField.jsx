import React from "react";
import SResultIndividual from "./SResultIndividual";
import { SearchContext } from "./SearchContext";

export default function SResultField() {
    const { perPage } = React.useContext(SearchContext)


    return (
        <div>
            <SResultIndividual />
        </div>
    )
}