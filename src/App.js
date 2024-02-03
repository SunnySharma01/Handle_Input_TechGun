import React from 'react';
import Expences from './components/Expences/Expences';

const App = ()=>{
  let expence = [
    {
      id: 'e1',
      title: 'School Fee',
      amount: 2330,
      date: new Date(2023,5,16)
    },
    {
      id: 'e2',
      title: 'College Fee',
      amount: 9550,
      date: new Date(2022,8,30)
    },
    {
      id: 'e3',
      title: 'Party',
      amount: 2330,
      date: new Date(2023,12,18)
    },
    {
      id: 'e4',
      title: 'Shopping',
      amount: 9652,
      date: new Date(2024,1,1)
    }
  ];
  return(
    <div className='app-container'>
    <h1>Let's Get Started</h1>
    <Expences item={expence}/>
    </div>
    
  );
}
export default App;