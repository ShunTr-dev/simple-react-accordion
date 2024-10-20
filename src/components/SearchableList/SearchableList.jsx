import { useState } from 'react'

export default function SearchableList({ items, itemKeyFn, children }) {
    const [searchTerm, setSearchTerm] = useState('')

    const searchResults = items.filter((item) => JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase()))

    function handleSearch(event) {
        setSearchTerm(event.target.value)
    }

    return (
        <div className="searchable-list">
            <input type="search" onChange={handleSearch} placeholder="Search..." />
            <ul>
                {searchResults.map((item) => (
                    <li key={itemKeyFn(item)}>{children(item)}</li>
                ))}
            </ul>
        </div>
    )
}
