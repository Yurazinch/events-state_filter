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
  
  const points = [ "All", "Websites", "Flayers", "Business Cards" ];

  const [activeItem, setActiveItem] = useState('All');
    
  const onSelectFilter = (item) => {
    setActiveItem(item);       
  }

  function Menu() {
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
    <div>
      <div className='menu'>
        <Menu />
      </div>      
      <div className='performance'>        
        <ProjectList setCategory={activeItem}/>         
      </div>                        
    </div>
  );
}

export default App;
