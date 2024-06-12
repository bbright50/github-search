import React from 'react'
import SearchItems from './SearchItems'


export default function SearchResults(props) {

    return (
        <div className='result-list'>
            <SearchItems 
                link={props.link}
                name={props.name}
                article={props.article}
                id={props.id}
            />
        </div>
    )
}