import React from "react";
import { SearchContext } from "./SearchContext";
import { Octokit } from "octokit";



const octokit = new Octokit({
  auth: ""
});


export default function SButton() {
  const { contextData, setPerPage, setLoading, setCurrentPull } = React.useContext(SearchContext)
  const { perPage, currentPull, loading, searchValue, language } = contextData;

  // 
  // function makeQString() {
  // let query = ""
  //   if searchValue {
  //     query += "?" + searchValue
  //   } else break
  //   if language {
  //     query += "&" + language
  //   }
  //   return query
  // }

  React.useEffect(() => {
    async function fetchData() {
      const response = await octokit.request(`GET /orgs/{org}/repos`, {
        org: "octokit",
      });
      // response type id object
      const objList = response.data
      setCurrentPull(objList);
    }
    fetchData()
  }, [contextData, setCurrentPull])




  // obj.id is key
  // obj.full_name is the name of repo
  // obj.owner.login is the owners username WILL BE 'OCTOKIT'
  // obj.description is repo description
  // obj.html_url is the link

  // obj.language is repo language
  // obj.stargazers_count is star count
  // obj.forks is the number of forks



  return (
    <button onClick={console.log("clicked")}>{loading ? "Searching" : "Search"}</button>
  )
}