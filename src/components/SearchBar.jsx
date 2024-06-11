import React from 'react'


export default function SearchBar() {
 const [searchValue, setSearchValue] = React.useState("")

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
        <div>
            <form onSubmit={gitApiCall}>
                <input type="text" placeholder="Enter Search Topic" onChange={handleSeachValueChange}/>
                <button type='submit'>Search</button>
            </form>
        </div>
  )
}