import React from "react";
import axios from 'axios';

export default function MainThree() {
    const [username, setUsername] = React.useState()
    const [loading, setLoading] = React.useState(false)
    const [repos, setRepos] = React.useState([])

    function handleSubmit(e) {
        e.preventDefault();
        searchRepos();
    }

    function searchRepos() {
        setLoading(true)
        axios({
            method: "get",
            url: `https://api.github.com/users/${username}/repos`,
        }).then(res => {
                setLoading(false);
                setRepos(res.data);
            })
    }

    function renderRepo(repo) {
        return (
            <div className="row" key={repo.id}>
                <h1 className="repo-name">
                    {repo.name}
                </h1>
            </div>
        );
    }

    return (
        <div className="page">
            <div className="landing-page-container">
                <div className="left-side">
                    <form className="form">
                        <input 
                        className="input"
                        value={username}
                        placeholder="Enter Keyword"
                        onChange={e => setUsername(e.target.value)}
                        />
                        <button className="button" onClick={handleSubmit}>{loading ? "Searching" : "Search"}</button>
                    </form>
                    <div className="results-container">
                        {repos.map(renderRepo)}
                    </div>
                </div>
            </div>
        </div>
    )
}