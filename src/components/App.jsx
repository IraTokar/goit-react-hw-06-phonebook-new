import React, { Component } from 'react';
import ContactForm from './ContactsForm/ContactsForm';
import ContactList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';

const storageKey = 'contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Albus Dumbledore', number: '459-12-56' },
      { id: 'id-2', name: 'Severus Snape', number: '443-89-12' },
      { id: 'id-3', name: 'Minerva McGonagall', number: '645-17-79' },
      { id: 'id-4', name: 'Remus Lupin', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const savedContact = localStorage.getItem(storageKey);

    if (savedContact !== null) {
      this.setState({
        contacts: JSON.parse(savedContact),
      })
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
        localStorage.setItem(storageKey,JSON.stringify(this.state.contacts));
    }
  }


  addContact = newContact => {
    const anExistingContact = this.state.contacts.some(({ name }) => name.toLowerCase() === newContact.name.toLowerCase());

    if (anExistingContact) {
      alert(`${newContact.name} is already in contacts`);
      return;
    };

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { id: nanoid(), ...newContact }]
      }
    })
  };

  changeFilter = event => {
    this.setState({ filter: event.target.value });
  };

  

  removeContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({id}) =>id !== contactId)
      }
    })
  }

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();


    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAdd={this.addContact} />
       
        <h2>Contacts</h2>
        <Filter
            filter={filter}
            onChangeFilter={this.changeFilter}
        />
        <ContactList
          contacts={visibleContacts}
          onRemoveContact = {this.removeContact}
        />
      </div>
    )
  }
}

export default App;
