import React, { useEffect } from 'react'
import SearchFilter from "./SearchFilter"
import SearchResults from './SearchResults';
import { Octokit } from "octokit";



export default function SearchBar() {
 const [perPage, setPerPage] = React.useState(10)
 const octokit = new Octokit({ });
 let newArray = []

 function repoReq(perPage) {octokit.rest.issues.listForRepo({
    owner: "github",
    repo: "docs",
    per_page: perPage
  })
  .then(data => {
    newArray = data.data
    console.log(newArray[0])
  })
};

React.useEffect (() => {
  repoReq(perPage)
}, [perPage])


//  data.data[i].title          article
//  data.data[i].id             id
//  data.data[i].url            link
//  data.data[i].user           name
//  data.headers.link[0]        for the next page link; will be there if there are more pages


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

// const callResults = newArray.map(issue => {
//   return (
//     <SearchResults 
//               name={newArray.user}
//               link={newArray.link}
//               article={newArray.title}
//               id={newArray.id}
//             />
//     )
//   })


  return (
        <div className='search-bar'>
            <form className='search-form' onSubmit={console.log("clicked")}>
                <input 
                type="text" 
                placeholder="Enter Search Topic" 
                onChange={handleSeachValueChange}/>
                <SearchFilter setPerPage={setPerPage}/>
                <button className='search-button' type='submit'>Search</button>
            </form>
        </div>
  )
}

// name={newArray.user}
// link={newArray.link}
// article={newArray.title}
// id={newArray.id}


