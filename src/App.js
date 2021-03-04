import React, { useState } from 'react';
import './App.css';
import Items from './components/Items';

function App(){
  const tasks = [
    {id: 0, text: '정장보다는 캐주얼을 좋아한다.'     , yes:  6, no: 1},
    {id: 1, text: '주변에서 귀여움을 받는 편이다.'    , yes:  7, no: 2},
    {id: 2, text: '정신적으로 약하다고 느낄 때가 많다.', yes:  8, no: 3},
    {id: 3, text: '클래식 등 차분한 것을 좋아한다.'   , yes:  9, no: 4},
    {id: 4, text: '주변인들의 생일을 기억 하는 편이다.', yes: 10, no: 5},
  ];
  const [item, setItem] = useState(tasks[0]);

  const _onClick = id => {
    console.log('id: ', id);
    const newItem = tasks[id];
    console.log(newItem);
    setItem(newItem);
  }

  return (
    <div className="App">
      <Items
        item={item}
        onClick={_onClick}
      />
    </div>
  );
}

export default App;