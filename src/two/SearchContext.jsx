import React from "react";

const SearchContext = React.createContext();

// const contextData = {
//     perPage: 10,
//     language: "",
//     autoSuggest: false,
//     loading: false,
//     searchValue: "",
//     currentPull: []
// };

// const setPerPage = (perPage) => {
//     contextData.perPage = perPage;
// };

// const setLanguage = (language) => {
//     contextData.language = language;
// };

// const setAutoSuggest = (value) => { contextData.autoSuggest = value; }

// const setSearchValue = (value) => { contextData.searchValue = value; }

// const setCurrentPull = (value) => { contextData.currentPull = value; }

// const setLoading = (value) => { contextData.loading = value; }

export const SearchProvider = (props) => {
    const [perPage, setPerPage] = React.useState(10)
    const [language, setLanguage] = React.useState("")
    const [autoSuggest, setAutoSuggest] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const [searchValue, setSearchValue] = React.useState("")
    const [currentPull, setCurrentPull] = React.useState([])
    let value = {
        perPage,
        autoSuggest,
        searchValue,
        currentPull,
        loading,
        language,
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
};

export const useSearchContext = () => {
    return React.useContext(SearchContext);
}


// const { contextData } = useSearchContext()
// const { perPage, currentPull, loading, autoSuggest } = contextData;