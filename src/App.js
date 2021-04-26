import { Component } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import shortid from 'shortid';

class App extends Component { 
    state = {
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: '',
    }

    addContact = ({ name, number }) => {
        const contactName = { name, number, id: shortid.generate()};
        this.setState((prevState) => ({
            contacts: [...prevState.contacts, contactName,]
        }));
    }
    
    handleFilter = (element) => {
        const { filter, value } = element.target;
        this.setState ({ filter: value });  
    }

    searchByFilter = () => {
        const { contacts, filter } = this.state;
        const caseInsensitive = filter.toLocaleLowerCase;
        return contacts.filter(contact => 
            contact.name.toLocaleLowerCase().includes(caseInsensitive)
        );
    }

    render() {
        return (
            <div>
                <h1>Phonebook</h1>
                <ContactForm onSubmit={this.addContact}/>
                <h2>Contacts</h2>
                <Filter onChange={this.handleFilter}/>
                {this.state.contacts.length !== 0 && 
                <ContactList phoneBook={this.state.contacts}/>
                }
                
            </div>
        )
    }
}
export default App;