import React from 'react';
import Row from './Row';

export default function List(props){

    function deleteList(id){
        props.onDelete(id)
    }

    function update(index){
        props.oneditInfo(index)
    }

    function eachTruck(item, i){
        return  <Row key={item.id} index={i} id={item.id} onDelete={deleteList} onUpdate={update}> 
                    <div className="index">{i+1}</div>
                    <div className="date">{item.date}</div>
                    <div className="name">{item.fullName}</div>
                    <div className="city">{item.city}</div>
                </Row> 
    }

    
    return (
        <div className="list">
            {props.trucks.map(eachTruck)} 
        </div>
        )
    
}
