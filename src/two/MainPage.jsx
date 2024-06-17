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
                <div className="s-cluster">
                    <div className="s-bar-line">
                        <SBar />
                        <SFilter />
                    </div>
                    <div className="s-button">
                        <SButton />
                    </div>
                </div>
                <div className="s-suggest">
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