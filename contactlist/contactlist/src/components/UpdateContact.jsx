import React, { Component } from 'react'
import ContactService from '../services/ContactService';

export default class UpdateContact extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.match.params.id,
             name: '',
             email: '',
             address: '',
             telephone: '',
 
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeemailHandler = this.changeemailHandler.bind(this);
        this.updateContact = this.updateContact.bind(this);
     }
     componentDidMount()
     {
         ContactService.getContactById(this.state.id).then( (res)=>{
            let contact = res.data;
            this.setState({ name: contact.name, email: contact.email, address: contact.address, telephone: contact.telephone

            });
         });
     }
     updateContact =(e) =>
     {
         e.preventDefault();
         let contact ={id: this.state.id,name: this.state.name, email: this.state.email, address: this.state.address, telephone: this.state.telephone };
         console.log('contact =>'+JSON.stringify(contact));
         ContactService.updateContact(contact, this.state.id).then(res => {
            this.props.history.push('/ListContact');
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
                
                <div className="container">
                    <div className="row">
                       
                         <h3 className="text-center">Update Contact</h3>
                         <div className="card-body">
                             <form>
                                 <div className ="form-group">
                                     <label>Name:</label>
                                     <input placeholder="name" name="name" className="form-control" value={this.state.name} onChange={this.changeNameHandler}/>
                                </div>
                                <div className ="form-group">
                                     <label>Email Address:</label>
                                     <input placeholder="email" name="email" className="form-control" value={this.state.email} onChange={this.changeemailHandler}/>
                                </div>
                                <div className ="form-group">
                                     <label>Address:</label>
                                     <input placeholder="address" name="address" className="form-control" value={this.state.address} onChange={this.changeaddressHandler}/>
                                </div>
                                <div className ="form-group">
                                     <label>Telephone:</label>
                                     <input placeholder="telephone" name="telephone" className="form-control" value={this.state.telephone} onChange={this.changetelephoneHandler}/>
                                </div>
                                <button className="btn btn-success" onClick={this.updateContact}>update</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
 
                             </form>
                         </div>
                    </div>
                </div>
             </div>
         );
     }
}


