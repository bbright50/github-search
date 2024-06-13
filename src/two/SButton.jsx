import React from "react";
import { SearchContext } from "./SearchContext";
import { Octokit } from "octokit";




export default function SButton() {
    const { data, setPerPage } = React.useContext(SearchContext)
    const { perPage } = data;
    const octokit = new Octokit({ });

    function repoReq(pages) {octokit.rest.issues.listForRepo({
        owner: "github",
        repo: "docs",
        per_page: pages
      })
      .then(data => {console.log(data)})
    };
    
    React.useEffect (() => {
      repoReq(perPage)
    }, [perPage])


    return (
        <button className='' onClick={repoReq(perPage)}>Search</button>
    )
}