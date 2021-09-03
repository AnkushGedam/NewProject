import axios from 'axios';
const CONTACT_BASE_URL="http://localhost:8080/MySpringMvc/co";
class ContactService {
    getContacts(){
        return axios.get(`${CONTACT_BASE_URL}/listContact`);
    }
    createContact(contact)
    {
        return axios.post(`${CONTACT_BASE_URL}/saveContact`, contact);
    }
    getContactById(contactId){
        return axios.get(`${CONTACT_BASE_URL}/editContact/${contactId}` );
    }
    updateContact(contact, contactId){
        return axios.put(`${CONTACT_BASE_URL}/updateContact/${contactId}`, contact);
    }
    deleteContact(contactId)
    {
        return axios.delete(`${CONTACT_BASE_URL}/deleteContact/${contactId}`);
    }
}
export default new ContactService();