import { Component } from "react";
export class Portfolio extends Component {  
    constructor(props) {
        super(props);
        this.onSelectFilter = this.onSelectFilter().bind(this);
        this.state = {state: 0};
        this.selected="All";
        this.cards=[
            { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
                category: "Business Cards"
            }, 
            { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
                category: "Websites" 
            }, 
            { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
                category: "Websites" 
            }, 
            { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
                category: "Websites" 
            }, 
            { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
            category: "Business Cards"
            }, 
            { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
            category: "Websites" 
            },
            { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
            category: "Websites" 
            },
            { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
            category: "Business Cards" 
            },
            { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
            category: "Websites" 
            },
            { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
            category: "Flayers" 
            },
            { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
            category: "Websites" 
            },
            { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
            category: "Business Cards" 
            },
            { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
            category: "Websites" 
            },
            { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
            category: "Websites" 
            },
            { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
            category: "Business Cards" 
            },
            { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
            category: "Websites" 
            },
            { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
            category: "Flayers" 
            }
        ];

    }    
    onSelectFilter = (e) => {
        e.preventDefault();
        this.setState ({state: this.state + 1})
        this.selected = e.target.innerText;
    } 

    render() {        
        return ( 
            <body>         
                <Toolbar />
                <div className="activeCards">
                    <ProjectList />
                </div>
            </body>                      
        )
    }
}

function ProjectList (selected, cards) {
    return (        
        this.selected === 'All' ? this.cards.map(card => card = <div className="cardImage"><img src={card.img} alt={card.category} /></div>) : this.cards.filter(card => card.category === selected).map(card => card = <div className="cardImage"><img src={card.img} alt={card.category} /></div>)        
    )
}

function Toolbar (onSelectFilter) { 
    return (
        <div>
            <ul className="filters" onClick={onSelectFilter()}>
                <li>All</li>
                <li>Websites</li>
                <li>Flayers</li>
                <li>Business Cards</li>
            </ul>
        </div>
    )
}