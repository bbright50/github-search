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

{/* < div className="big-result-box" >
                <div className="top-box">
                    <h1 className='title'>{currentPull[perPage + 1].name}</h1>
                    <h2 className='username'>Octokit</h2>
                </div>
                <div className='small-result-box'>
                    <p className='description'>{currentPull[perPage + 1].description}</p>
                    <div className="small-filter-nums">
                        <h3 className="language">Language:{currentPull[perPage + 1].language}</h3>
                        <h4 className='forks'>Forks:{currentPull[perPage + 1].forks}</h4>
                        <h5 className='stars'>Stars:{currentPull[perPage + 1].stargazers_count}</h5>
                    </div>
                </div>
                <hr></hr>
            </div >
            < div className="big-result-box" >
                <div className="top-box">
                    <h1 className='title'>{currentPull[perPage + 2].name}</h1>
                    <h2 className='username'>Octokit</h2>
                </div>
                <div className='small-result-box'>
                    <p className='description'>{currentPull[perPage + 2].description}</p>
                    <div className="small-filter-nums">
                        <h3 className="language">Language:{currentPull[perPage + 2].language}</h3>
                        <h4 className='forks'>Forks:{currentPull[perPage + 2].forks}</h4>
                        <h5 className='stars'>Stars:{currentPull[perPage + 2].stargazers_count}</h5>
                    </div>
                </div>
                <hr></hr>
            </div >
            < div className="big-result-box" >
                <div className="top-box">
                    <h1 className='title'>{currentPull[perPage + 3].name}</h1>
                    <h2 className='username'>Octokit</h2>
                </div>
                <div className='small-result-box'>
                    <p className='description'>{currentPull[perPage + 3].description}</p>
                    <div className="small-filter-nums">
                        <h3 className="language">Language:{currentPull[perPage + 3].language}</h3>
                        <h4 className='forks'>Forks:{currentPull[perPage + 3].forks}</h4>
                        <h5 className='stars'>Stars:{currentPull[perPage + 3].stargazers_count}</h5>
                    </div>
                </div>
                <hr></hr>
            </div >
            < div className="big-result-box" >
                <div className="top-box">
                    <h1 className='title'>{currentPull[perPage + 4].name}</h1>
                    <h2 className='username'>Octokit</h2>
                </div>
                <div className='small-result-box'>
                    <p className='description'>{currentPull[perPage + 4].description}</p>
                    <div className="small-filter-nums">
                        <h3 className="language">Language:{currentPull[perPage + 4].language}</h3>
                        <h4 className='forks'>Forks:{currentPull[perPage + 4].forks}</h4>
                        <h5 className='stars'>Stars:{currentPull[perPage + 4].stargazers_count}</h5>
                    </div>
                </div>
                <hr></hr>
            </div >
            < div className="big-result-box" >
                <div className="top-box">
                    <h1 className='title'>{currentPull[perPage + 5].name}</h1>
                    <h2 className='username'>Octokit</h2>
                </div>
                <div className='small-result-box'>
                    <p className='description'>{currentPull[perPage + 5].description}</p>
                    <div className="small-filter-nums">
                        <h3 className="language">Language:{currentPull[perPage + 5].language}</h3>
                        <h4 className='forks'>Forks:{currentPull[perPage + 5].forks}</h4>
                        <h5 className='stars'>Stars:{currentPull[perPage + 5].stargazers_count}</h5>
                    </div>
                </div>
                <hr></hr>
            </div >
            < div className="big-result-box" >
                <div className="top-box">
                    <h1 className='title'>{currentPull[perPage + 6].name}</h1>
                    <h2 className='username'>Octokit</h2>
                </div>
                <div className='small-result-box'>
                    <p className='description'>{currentPull[perPage + 6].description}</p>
                    <div className="small-filter-nums">
                        <h3 className="language">Language:{currentPull[perPage + 6].language}</h3>
                        <h4 className='forks'>Forks:{currentPull[perPage + 6].forks}</h4>
                        <h5 className='stars'>Stars:{currentPull[perPage + 6].stargazers_count}</h5>
                    </div>
                </div>
                <hr></hr>
            </div >
            < div className="big-result-box" >
                <div className="top-box">
                    <h1 className='title'>{currentPull[perPage + 7].name}</h1>
                    <h2 className='username'>Octokit</h2>
                </div>
                <div className='small-result-box'>
                    <p className='description'>{currentPull[perPage + 7].description}</p>
                    <div className="small-filter-nums">
                        <h3 className="language">Language:{currentPull[perPage + 7].language}</h3>
                        <h4 className='forks'>Forks:{currentPull[perPage + 7].forks}</h4>
                        <h5 className='stars'>Stars:{currentPull[perPage + 7].stargazers_count}</h5>
                    </div>
                </div>
                <hr></hr>
            </div >
            < div className="big-result-box" >
                <div className="top-box">
                    <h1 className='title'>{currentPull[perPage + 8].name}</h1>
                    <h2 className='username'>Octokit</h2>
                </div>
                <div className='small-result-box'>
                    <p className='description'>{currentPull[perPage + 8].description}</p>
                    <div className="small-filter-nums">
                        <h3 className="language">Language:{currentPull[perPage + 8].language}</h3>
                        <h4 className='forks'>Forks:{currentPull[perPage + 8].forks}</h4>
                        <h5 className='stars'>Stars:{currentPull[perPage + 8].stargazers_count}</h5>
                    </div>
                </div>
                <hr></hr>
            </div >
            < div className="big-result-box" >
                <div className="top-box">
                    <h1 className='title'>{currentPull[perPage + 9].name}</h1>
                    <h2 className='username'>Octokit</h2>
                </div>
                <div className='small-result-box'>
                    <p className='description'>{currentPull[perPage + 9].description}</p>
                    <div className="small-filter-nums">
                        <h3 className="language">Language:{currentPull[perPage + 9].language}</h3>
                        <h4 className='forks'>Forks:{currentPull[perPage + 9].forks}</h4>
                        <h5 className='stars'>Stars:{currentPull[perPage + 9].stargazers_count}</h5>
                    </div>
                </div>
                <hr></hr>
            </div > */}