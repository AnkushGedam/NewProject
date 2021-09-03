
import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import {BrowserRouter as Router, Route, Switch}from 'react-router-dom';
import ListContact from './components/ListContact';
import CreateContactComponent from './components/CreateContactComponent';
import UpdateContact from './components/UpdateContact';
import ViewContact from './components/ViewContact';
function App() {
  return (
    <div>
      <Router>
      <div className="container">
    
      <HeaderComponent />
    
    <div className="container">
    <switch >
      <Route path="/" exact component ={ListContact}></Route>
      <Route path="/listContact" component ={ListContact}></Route>
      <Route path="/saveContact" component ={CreateContactComponent}></Route>
      <Route path="/updateContact/:id" component ={UpdateContact}></Route>
      <Route path="/viewContact/:id" component ={ViewContact}></Route>
      </switch>
      </div><FooterComponent/>
    </div>
    </Router>
    </div>
  );
}

export default App;
