import React, { useState } from 'react';
import './ExpenceItem.css'
import ExpenceDate from './ExpenceDate';
import Card from '../UI/Card';
const ExpenceItem =(props)=>{                         /*Arrow function*/
    const [NewTitle,setNewTitle] = useState(); 
    const [title,setTitle] = useState(props.title);
    const clickHandle =()=>{
       // setTitle('change Title');
       setTitle(NewTitle);
    }  
    const changeHandle = (event) =>{
        setNewTitle(event.target.value);
    }         
    return(
        <Card className='expense-item'>
            <ExpenceDate date={props.date}/>
            <div className='expense-item_desription'> 
            <h2>{title}</h2>
            <div className='expence-item_price'>${props.amount}</div>
            </div>
            <input type="text" value={NewTitle} onChange={ changeHandle }/>
            <button onClick={clickHandle}>Change title</button>
         </Card>
    );
}
export default ExpenceItem;
