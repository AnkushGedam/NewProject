import React, { Component } from 'react';
import ContactService from '../services/ContactService';

class ListContact extends Component {
    constructor(props){
        super(props)
        this.state={
            contacts : []
        }
        this.addContact = this.addContact.bind(this);
        this.editContact=this.editContact.bind(this);
        this.deleteContact = this.deleteContact.bind(this);
    }
    editContact(id){
        this.props.history.push(`/updateContact/${id}`);
    }
    deleteContact(id){
        ContactService.deleteContact(id).then( res => {
            this.setState({ contacts : this.state.contacts.filter(contact => contact.id !== id)});
        });
    }
    viewContact(id){
        this.props.history.push(`/viewContact/${id}`);
    }
    componentDidMount(){
        ContactService.getContacts().then((res) => {
            this.setState({
                contacts: res.data
            })
        });
    }   
    addContact()
    {
        this.props.history.push('/saveContact');
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Contact List</h2>
                <div className="row">
                    <div className="row">
                    <button className="btn btn-primary" onClick={this.addContact}>Add contact</button>
                    </div>
                     <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Contact id</th>
                                <th>Contact Name</th>
                                <th>Contact email</th>
                                <th>Contact address</th>
                                <th>Contact telephone</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.contacts.map(
                                    contact =>
                                    <tr key={contact.id}>
                                    <td>{contact.id}</td>
                                    <td>{contact.name}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.address}</td>
                                    <td>{contact.telephone}</td>
                                   <td>
                                       <button onClick={() => this.editContact(contact.id)}className="btn btn-info">Update</button>
                                       <button  style={{marginLeft:"10px"}} onClick={()=> this.deleteContact(contact.id)}className="btn btn-danger">Delete</button>
                                        <button style={{marginLeft:"10px"}} onClick={()=> this.viewContact(contact.id)} className="btn btn-info">View</button>
                                   </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListContact;