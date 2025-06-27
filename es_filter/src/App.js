import './App.css';
import { ProjectList } from './projectlist';
import { useState } from 'react';

function App() {  

  function MenuItem({ item, onClick, isActive }) {
    return (
      <li
        onClick={() => onClick(item)}
        style={{ color: isActive ? 'red' : 'black' }}
      >
        {item}
      </li>
    );
  } 

  function Menu() {

    const [activeItem, setActiveItem] = useState('All');

    const points = [ "All", "Websites", "Flayers", "Business Cards" ];    
    
    const onSelectFilter = (item) => {
      setActiveItem(item);
    };

    return (
      <ul>
        {points.map((item, index) => (
          <MenuItem
            key={index}
            item={item}
            onClick={onSelectFilter}
            isActive={activeItem === item}
          />
        ))}
      </ul>
    );
  }  
  
  return (
    <div /*className="App"*/>
      <div className='menu'>
        <Menu />
      </div>      
      <div>
        <ProjectList />  
      </div>                        
    </div>
  );
}

export default App;
