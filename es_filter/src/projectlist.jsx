export function ProjectList (props) {

    const {state, cards} = props;

    if(state.selected === 'All') {
        return (cards.map(card => (<div className="cardImage"><img src={card.img} alt={card.category} /></div> )));
    } else {
        return (cards.filter(card => card.category === state.selected).map(card => (<div className="cardImage"><img src={card.img} alt={card.category} /></div>)));
    }
}