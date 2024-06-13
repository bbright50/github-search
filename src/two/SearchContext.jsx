import React from "react";

const SearchContext = React.createContext();

const data = {
    perPage: 10,
    autoSuggest: false,
    searchValue: ""
};

const setPerPage = (perPage) => {
    data.perPage = perPage;
};

const setAutoSuggest = (value) => { data.autoSuggest = value; }

const setSearchValue = (value) => { data.searchValue  = value; }

const SearchProvider = (props) => {
    const value = {
        data,
        setPerPage,
        setAutoSuggest,
        setSearchValue
    };
    return <SearchContext.Provider value={value}>
        {props.children}
    </SearchContext.Provider>;
}

export { SearchContext, SearchProvider };