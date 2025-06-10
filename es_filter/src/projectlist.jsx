export function ProjectList (props) {
    const {selected, cards} = props;
    return (
        (selected,cards) => {
            if(selected === 'All') {
                cards.map(card => card = <figure className="card"><img src={card.img} alt={card.category} /><figcaption>{card.category}</figcaption></figure>);
            } else {
                cards.filter(card => card.category === selected).map(card => card = <figure className="cardImage"><img src={card.img} alt={card.category} /><figcaption>{card.category}</figcaption></figure>);
            }
        }
    )
}
    