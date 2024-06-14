import React from "react";

const SearchContext = React.createContext();

const data = {
    perPage: 10,
    autoSuggest: false,
    loading: false,
    searchValue: "",
    currentPull: {}
};

const setPerPage = (perPage) => {
    data.perPage = perPage;
};

const setAutoSuggest = (value) => { data.autoSuggest = value; }

const setSearchValue = (value) => { data.searchValue  = value; }

const setCurrentPull = (value) => { data.currentPull  = value; }

const setLoading = (value) => { data.loading = value; }

const SearchProvider = (props) => {
    let value = {
        data,
        setPerPage,
        setAutoSuggest,
        setSearchValue,
        setCurrentPull,
        setLoading
    };
    return <SearchContext.Provider value={value}>
        {props.children}
    </SearchContext.Provider>;
}

export { SearchContext, SearchProvider };