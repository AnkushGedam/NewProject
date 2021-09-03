import React, { Component } from 'react';
import ContactService from '../services/ContactService';

class ViewContact extends Component {
    constructor(props){
        super(props)
        this.state ={
            id : this.props.match.params.id,
            contact :{}
        }
    }
    componentDidMount(){
        ContactService.getContactById(this.state.id).then(res =>{
            this.setState({contact : res.data});

        })
    }
    render() {
        return (
            <div className="container">
               <div><br/></div>
                
                <div className="card col-md-6 offset-md-3">
                <h2 className="well well-lg"> View contact Page</h2>
                <div className="card-body">
                    <div className="row" style={{marginCenter:"10px"}}>
                    <label>Contact Name:</label>
                    <div>{ this.state.contact.name}</div></div>
                    <div className="row">
                    <label>Contact Email:</label>
                    <div>{ this.state.contact.email}</div></div>
                    <div className="row">
                    <label>Contact Address:</label>
                    <div>{ this.state.contact.address}</div></div>
                    <div className="row" >
                    <label>Contact Telephone number:</label>
                    <div>{ this.state.contact.telephone}</div></div>
                </div>
            </div>
            </div>
        );
    }
}

export default ViewContact;