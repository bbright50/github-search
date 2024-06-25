import React from "react";
import { SearchContext } from "./SearchContext";


export default function SResultIndividual() {
    const { contextData, setPerPage, setLoading } = React.useContext(SearchContext)
    const { perPage, currentPull, loading } = contextData;

    // ***function to make the perPage amount of objects in the array to prep them to render***
    // needs to be a normal for loop with the number of times changing based on perPage

    // function sortPullData() {
    //     console.log(currentPull)
    //     // iterate through each response
    //     for (const repos of currentPull) {
    //         // for (const repo of repos) {
    //         console.log(repos)
    //         // }
    //     }
    // }

    // function renderItems() {



    // }

    // obj.id is key
    // obj.full_name is the name of repo
    // obj.owner.login is the owners username WILL BE 'OCTOKIT'
    // obj.description is repo description
    // obj.html_url is the link

    // obj.language is repo language
    // obj.stargazers_count is star count
    // obj.forks is the number of forks




    return (
        <div className="big-result-box">
            <div className="top-box">
                <h1 className='title'>The Title</h1>
                <h2 className='username'>Octokit</h2>
            </div>
            <div className='small-result-box'>
                <p className='description'>a bunch of information about this project</p>
                <div className="small-filter-nums">
                    <h3 className='forks'>Forks</h3>
                    <h4 className='stars'>Stars</h4>
                </div>
            </div>
            <hr></hr>
        </div>
    )
}