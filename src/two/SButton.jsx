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
        per_page: 30,
      });
      // response type id object
      const objList = response.data
      setCurrentPull(objList);
      console.log(currentPull)
    }
    fetchData()
  }, [language])




  // [currentPull, searchValue, language, perPage, setCurrentPull] endless loop


  return (
    <button onClick={console.log("clicked")}>{loading ? "Searching" : "Search"}</button>
  )
}

// setDisplay(() => !display)