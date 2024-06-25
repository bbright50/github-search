import React from "react";

const SearchContext = React.createContext();

const contextData = {
    perPage: 10,
    language: "",
    autoSuggest: false,
    loading: false,
    searchValue: "",
    currentPull: []
};

const setPerPage = (value) => {
    contextData.perPage = value;
};

const setLanguage = (language) => {
    contextData.language = language;
};

const setAutoSuggest = (value) => { contextData.autoSuggest = value; }

const setSearchValue = (value) => { contextData.searchValue = value; }

const setCurrentPull = (value) => { contextData.currentPull = value; }

const setLoading = (value) => { contextData.loading = value; }

const SearchProvider = (props) => {
    let value = {
        contextData,
        setPerPage,
        setAutoSuggest,
        setSearchValue,
        setCurrentPull,
        setLoading,
        setLanguage
    };
    return <SearchContext.Provider value={value}>
        {props.children}
    </SearchContext.Provider>;
}

export { SearchContext, SearchProvider };