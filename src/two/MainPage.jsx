import React from "react";
import SBar from "./SBar";
import SButton from "./SButton";
import SFilter from "./SFilter";
import SResultField from "./SResultField";
import PageNav from "./PageNav";
import SSuggest from "./SSuggest";

import { SearchContext, SearchProvider } from "./SearchContext";


export default function MainPage() {
    return (
        <div>
            <SearchProvider>
                <div className="search-bar">
                    <SBar />
                    <SFilter />
                </div>
                <div className="search-button">
                    <SButton />
                </div>
                <div className="search-suggest">
                    <SSuggest />
                </div>
                <div className="result-field">
                    <SResultField />
                    <PageNav />
                </div>
            </SearchProvider>
        </div>
    )
}

export {SearchContext}