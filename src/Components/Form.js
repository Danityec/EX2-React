import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);

        this.state = { 
            id: null,
            date:"",
            fullName:"",
            city:""
        }
        this.save = this.save.bind(this);
        this.inputChange = this.inputChange.bind(this);

    }


    save(e){
        e.preventDefault();
       
        if(this.props.fields.id == null)
            this.props.onSave(this.state);
    

        else 
            this.props.onUpdate(this.state, this.props.fields.id);
       
    }

    componentDidUpdate(prevProps) {
        if (this.props.fields !== prevProps.fields) {
            this.setState({
                id: this.props.fields.id,
                date: this.props.fields.date,
                fullName: this.props.fields.fullName,
                city: this.props.fields.city,
            })
        }
    }
  

    inputChange = e => {
        this.setState({
            [e.target.name]: e.target.value 
        });
    };


    render() {
        return (
        <div className="form">
                <input name ="date" placeholder="Date" value={this.state.date} onChange={this.inputChange}/>
                <input name ="fullName" placeholder="Full Name" value={this.state.fullName} onChange={this.inputChange}/>
                <input name ="city" placeholder="City" value={this.state.city} onChange={this.inputChange}/>
                <button className="saveORupdate" onClick={this.save}>
                   {this.props.fields.id == null ? "Save" : "Update"} 
                </button>
        </div>

        )
    }
   
}
export default Form;