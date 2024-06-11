import React from 'react'
import SearchFilter from "./SearchFilter"
import { Octokit } from "octokit";



export default function SearchBar() {
 const [searchValue, setSearchValue] = React.useState("")
 const octokit = new Octokit({ });

 function repoReq() {octokit.rest.issues.listForRepo({
    owner: "github",
    repo: "docs",
    per_page: 1
  })
  .then(data => console.log(data))
};

repoReq()
//  data.data[1].title
// data.data[0].id
//   .then(data => data.map())

    // function autoSuggest() {
    // 
    // }

    // may need a use effect function to delay the update of 
    // the state for the autofill so it doesnt always immediately update
    // would need setSearchValue in it

 function handleSeachValueChange(e) {
    // would need use effect instead of setSearchValue
    setSearchValue(e.target.value) 
    console.log(searchValue)
    // Need to add autosuggest function in here
 }

function gitApiCall() {
    console.log("called API")
    // fetch("https://docs.github.com/en/rest")
    //     .then(res => res.json())
    //     .then(data => console.log(data))
}

  return (
        <div className='search-bar'>
            <form className='search-form' onSubmit={repoReq}>
                <input type="text" placeholder="Enter Search Topic" onChange={handleSeachValueChange}/>
                <SearchFilter />
                <button className='search-button' type='submit'>Search</button>
            </form>
        </div>
  )
}