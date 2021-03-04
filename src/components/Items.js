import React from 'react';
import './Item.css';

const Items = ({ item, onClick }) => {
  return (
    <div className='Item'>
      {item.text}
      <div className='BtnLayer'>

        <button className='Btn' onClick={() => onClick(item.yes)}>Yes</button>
        <button className='Btn' onClick={() => onClick(item.no)}>No</button>

      </div>
      <button onClick={() => onClick('1')}>Start</button>
    </div>
  );
}

export default Items;