import React, { Component } from 'react';
import Form from './Form';
import List from './List';
import trucksData from './../Data/trucks.json';


class Information extends Component {
   
    constructor(props){
        super(props);
        
        this.state = {
            trucks:[],
            fields:{
                id: null,
                date:"",
                fullName:"",
                city:""
            }
        }

        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
        this.add = this.add.bind(this);
        this.nextId = this.nextId.bind(this);
        this.editInfo = this.editInfo.bind(this);

    }
    
    update(newTruck, id){
        this.setState(prevState => ({   
            trucks: prevState.trucks.map(                                     
                truck =>{
                    if(truck.id === id)
                    {
                        truck.date = newTruck.date;
                        truck.fullName = newTruck.fullName
                        truck.city = newTruck.city
                    }  
                    return truck;
                }
                
            ),
            fields: {id: null, date:"", fullName:"",city:"" }
        }));
    }
 

    editInfo(index){

        this.setState(prevState => ({
            fields: {
                id: prevState.trucks[index]["id"],
                date: prevState.trucks[index]["date"],
                fullName: prevState.trucks[index]["fullName"],
                city: prevState.trucks[index]["city"],
            }
        }));
    }

    delete(id){
        this.setState(prevState => ({
            trucks: prevState.trucks.filter(truck => truck.id !== id)  
        }))
    }

    
    componentDidMount(){
        trucksData.map(item => this.add({id: item.id, date: item.date, fullName: item.fullName, city: item.city}));
    }

    add( {id = null, date='default date', fullName='default fullName', city='default city' } ) {
        this.setState(prevState => ({
            trucks: [
                ...prevState.trucks, {
                    id: id !== null ? id : this.nextId(prevState.trucks),
                    date: date,
                    fullName: fullName,
                    city: city

                }],

                fields: {id: null, date:"", fullName:"",city:"" }
            }
           
        ))
    }

        
    
    nextId(trucks = []) {
        let max = trucks.reduce((prev, curr) => prev.id > curr.id ? prev.id : curr.id , 0); 
        return ++max;   
    }


    render() {
        return (
        <div className="information">
            <div className="container">
            <List editing={this.editing} index={this.index} id={this.id} trucks={this.state.trucks} onDelete={this.delete} oneditInfo={this.editInfo}/>
            <Form fields={this.state.fields} onSave={this.add} onUpdate={this.update}/>
            </div>
        </div>
        )
    }
}

export default Information;