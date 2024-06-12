import React from 'react'

export default function SearchFilter({setPerPage}) {
    const [filterData, setFilterData] = React.useState(10)

    function handleChange(event) {
        event.preventDefault()
        console.log(event.target.value)
        const {value} = event.target
        setFilterData(() => value)
        setPerPage(() => value)
            }
    

    return (
        <select
        id="numPerPage"
        value={10}
        onChange={handleChange}
        name="numPerPage">
            <option selected disabled>Results Per Page</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
        </select>
    )
}