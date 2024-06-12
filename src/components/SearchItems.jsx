import React from 'react'


export default function SearchItems() {

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
            <h1 className='item-article'>KojfiUpdate about-commit-signature-verification.md</h1>
            <div className='result-lower-box'>
                <h2 className='item-name'>Sakib43351</h2>
                <h3 className='item-link'>https://api.github.com/repos/github/docs/issues/33464</h3>
            </div>
        </div>
    )
}