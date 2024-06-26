import React from "react";
import SResultIndividual from "./SResultIndividual";
import { useSearchContext } from "./SearchContext";

export default function SResultField() {
    const {
        setPerPage,
        setLoading,
        setCurrentPull,
        setLanguage,
        setSearchValue,
        setAutoSuggest,
        perPage,
        currentPull,
        loading,
        searchValue,
        language,
        autoSuggest } = useSearchContext();



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