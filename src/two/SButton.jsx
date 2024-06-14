import React from "react";
import { SearchContext } from "./SearchContext";
import { Octokit } from "octokit";




export default function SButton() {
    const { data, setPerPage, setLoading, setCurrentPull, setSearchArray } = React.useContext(SearchContext)
    const { perPage, currentPull, searchArray, loading } = data;
    const octokit = new Octokit({ });

    function repoReq(pages) {octokit.rest.issues.listForRepo({
        owner: "github",
        repo: "docs",
        per_page: pages
      })
      .then(data => {
          // setLoading(true) issue re-rendering when changing value like this
          setCurrentPull(data)
          console.log(currentPull)
          // setSearchArray(currentPull.data)
          // setLoading(false)
          // console.log(searchArray)
      })
    };
    
// currentPull.data[0].html_url LINK
// currentPull.data[0] RAW TITLE
// currentPull.data[0].user.login USERNAME


    React.useEffect (() => {
      repoReq(perPage)
    }, [perPage])


    return (
        <button className='' onClick={repoReq(perPage)}>Search</button>
    )
}