import React from "react";
import { useSearchContext } from "./SearchContext";


export default function SResultIndividual(props) {
    const {
        setPerPage,
        setLoading,
        setCurrentPull,
        setLanguage,
        setSearchValue,
        setAutoSuggest,
        setDisplay,
        display,
        perPage,
        currentPull,
        loading,
        searchValue,
        language,
        autoSuggest } = useSearchContext();


    // obj.id is key
    // obj.name is the name of repo
    // obj.owner.login is the owners username WILL BE 'OCTOKIT'
    // obj.description is repo description
    // obj.html_url is the link

    // obj.language is repo language
    // obj.stargazers_count is star count
    // obj.forks is the number of forks


    return (display &&
        <>
            < div className="big-result-box" >
                <div className="top-box">
                    <h1 className='title'>{props.name}</h1>
                    <h2 className='username'>Octokit</h2>
                </div>
                <div className='small-result-box'>
                    <p className='description'>{props.description}</p>
                    <div className="small-filter-nums">
                        <h3 className="language">Language:{props.language}</h3>
                        <h4 className='forks'>Forks:{props.forks}</h4>
                        <h5 className='stars'>Stars:{props.stars}</h5>
                    </div>
                </div>
                <hr></hr>
            </div >
        </>
    )
}
