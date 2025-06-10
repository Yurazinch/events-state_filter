export function Toolbar (props) { 
          
    return (
        <ul className="filters" onClick={props.onSelectFilter}>
            <li>All</li>
            <li>Websites</li>
            <li>Flayers</li>
            <li>Business Cards</li>
        </ul>
    )
}