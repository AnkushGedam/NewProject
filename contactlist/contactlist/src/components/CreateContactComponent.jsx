import React, { Component } from 'react';
import ContactService from '../services/ContactService';

class CreateContactComponent extends Component {
   constructor(props){
       super(props)
       this.state = {
            name: '',
            email: '',
            address: '',
            telephone: '',

       }
       this.changeNameHandler = this.changeNameHandler.bind(this);
       this.changeemailHandler = this.changeemailHandler.bind(this);
       this.saveContact = this.saveContact.bind(this);
    }
    saveContact =(e) =>
    {
        e.preventDefault();
        let contact ={name: this.state.name, email: this.state.email, address: this.state.address, telephone: this.state.telephone };
        console.log('contact =>'+JSON.stringify(contact));
        ContactService.createContact(contact).then(res =>{
            this.props.history.push('/listContact')
        });
    }
   changeNameHandler= (event)=>{
       this.setState({name: event.target.value});
   }
   changeemailHandler= (event)=>{
    this.setState({email: event.target.value});
    }
    changeaddressHandler= (event)=>{
    this.setState({address: event.target.value});
    }
    changetelephoneHandler= (event)=>{
    this.setState({telephone: event.target.value});
    }
    cancel()
    {
        this.props.history.push('/ListContact');
    }
    render() {
        return (
            <div>
               {/* <h1>Contact Form</h1> */}
               <div className="container">
                   <div className="row">
                      
                        <h3 className="text-center">Add Contact</h3>
                        <div className="card-body">
                            <form>
                                <div className ="form-group">
                                    <label>Name:</label>
                                    <input placeholder="Enter Name" name="name" className="form-control" value={this.state.name} onChange={this.changeNameHandler}/>
                               </div>
                               <div className ="form-group">
                                    <label>Email Address:</label>
                                    <input placeholder="Enter Email" name="email" className="form-control" value={this.state.email} onChange={this.changeemailHandler}/>
                               </div>
                               <div className ="form-group">
                                    <label>Address:</label>
                                    <input placeholder="Enter Address" name="address" className="form-control" value={this.state.address} onChange={this.changeaddressHandler}/>
                               </div>
                               <div className ="form-group">
                                    <label>Telephone:</label>
                                    <input placeholder="Enter Telephone" name="telephone" className="form-control" value={this.state.telephone} onChange={this.changetelephoneHandler}/>
                               </div>
                               <button className="btn btn-success" onClick={this.saveContact}>save</button>
                               <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>

                            </form>
                        </div>
                   </div>
               </div>
            </div>
        );
    }
}

export default CreateContactComponent;