import React from 'react'
import SearchBar from './components/SearchBar'
import AutoSuggest from './components/AutoSuggest'
import SearchResults from './components/SearchResults'

import './App.css'


export default function App() {
  const [count, setCount] = React.useState(0)

  return (
        <div>
          <SearchBar />
          <AutoSuggest />
          <SearchResults />
        </div>
  )
}

