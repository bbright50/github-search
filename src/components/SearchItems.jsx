import React from 'react'


export default function SearchItems({article, name, link, id}) {

    let itemList = [
        {
            name: "Bob",
            article: "Things bob does",
            link: "ww . bob does things . cpm"
        },
        {
            name: "Bill",
            article: "Things bill does",
            link: "ww . bill does things . cpm"
        },
        {
            name: "Sam",
            article: "Things sam does",
            link: "ww . sam does things . cpm"
        },
    ]

    return (
        <div className='result-item'>
            <h1 className='item-article'>{article}</h1>
            <div className='result-lower-box'>
                <h2 className='item-name'>{user}</h2>
                <h3 className='item-link'>{link}</h3>
            </div>
        </div>
    )
}