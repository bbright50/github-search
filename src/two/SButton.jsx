import React from "react";
import { useSearchContext } from "./SearchContext";
import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: ""
});


export default function SButton() {
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


  // function makeQString() {
  //   let query = ""
  //   if searchValue {
  //     query += "?" + searchValue
  //   } else break
  //   if language {
  //     query += "&" + language
  //   }
  //   return query
  // }

  // obj.id is key
  // obj.name is the name of repo
  // obj.owner.login is the owners username WILL BE 'OCTOKIT'
  // obj.description is repo description
  // obj.html_url is the link

  // obj.language is repo language
  // obj.stargazers_count is star count
  // obj.forks is the number of forks

  React.useEffect(() => {
    let query = ""
    if (searchValue) {
      query += "?qin:name" + searchValue
    }
    if (language) {
      query += "&" + language
    }
    console.log(query)
    async function fetchData() {
      const response = await octokit.request(`GET /orgs/{org}/repos${query}`, {
        org: "octokit",
        per_page: 30,
        in: { searchValue },

      });
      // response type is object
      const objList = response.data
      setCurrentPull(objList);
      console.log(currentPull)
    }
    fetchData()
  }, [language])




  // [currentPull, searchValue, language, perPage, setCurrentPull] endless loop


  return (
    <button onClick={() => setDisplay(!display)}>{loading ? "Searching" : "Search"}</button>
  )
}

// setDisplay(() => !display)