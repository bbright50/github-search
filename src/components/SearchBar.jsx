import React from 'react'


export default function SearchBar() {
 const [searchValue, setSearchValue] = React.useState("")

    // function autoSuggest() {
    // 
    // }

 function handleSeachValueChange(e) {
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