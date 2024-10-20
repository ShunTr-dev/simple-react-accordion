export default function SearchableList({ items }) {
    return (
        <div className="searchable-list">
            <input type="search" placeholder="Search..." />
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}
