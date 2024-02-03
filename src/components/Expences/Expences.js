import React from 'react';
import './Expences.css';
import ExpenceItem from './ExpenceItem';
import Card from '../UI/Card';
const Expences=(props)=>{
    return(
 <Card className='expences'>
            
    <ExpenceItem
      date={ props.item[0].date}
      title={ props.item[0].title}
      amount={ props.item[0].amount}/>
    
    <ExpenceItem
      date={ props.item[1].date}
      title={ props.item[1].title}
      amount={ props.item[1].amount}/>
    
    <ExpenceItem
      date={ props.item[2].date}
      title={ props.item[2].title}
      amount={ props.item[2].amount}/>
   
    <ExpenceItem
      date={ props.item[3].date}
      title={ props.item[3].title}
      amount={props.item[3].amount}/>
    
        
  </Card>
    )

 }
 export default Expences;