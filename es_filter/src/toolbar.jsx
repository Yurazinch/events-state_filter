export function Toolbar (props) {

    const {onSelectFilter} = props;
    
    const points = [ "All", "Websites", "Flayers", "Business Cards" ];    

    return (
        <ul className="filters">
            {points.map(item => (<li class="point" onClick={event => onSelectFilter(event)}>{item}</li>))}
        </ul>
    )
}