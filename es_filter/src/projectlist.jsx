export function ProjectList (props) {

    const {state, cards} = props;

    let cardSow;

    if(state.selected === 'All') {
        cardSow = cards.map(card => (<div className="cardImage"><img src={card.img} alt={card.category} /></div> ));
    } else {
        cardSow = cards.filter(card => card.category === state.selected).map(card => (<div className="cardImage"><img src={card.img} alt={card.category} /></div>));
    }

    return (
        <div>
            {cardSow}
        </div>
    )
}