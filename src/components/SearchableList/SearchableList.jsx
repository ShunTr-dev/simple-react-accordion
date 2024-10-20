import { useRef, useState } from 'react'

export default function SearchableList({ items, itemKeyFn, children }) {
    const lastChange = useRef();
    const [searchTerm, setSearchTerm] = useState('')

    const searchResults = items.filter((item) => JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase()))

    function handleSearch(event) {
        if (lastChange.current) {
            clearTimeout(lastChange.current)
        }

        lastChange.current = setTimeout(() => {
            setSearchTerm(event.target.value)
        }, 500)
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
