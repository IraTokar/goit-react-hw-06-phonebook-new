import React, {useEffect, useState } from 'react';
import ContactForm from './ContactsForm/ContactsForm';
import ContactList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';

const storageKey = 'contacts';

const phoneContacts = [
      { id: 'id-1', name: 'Albus Dumbledore', number: '459-12-56' },
      { id: 'id-2', name: 'Severus Snape', number: '443-89-12' },
      { id: 'id-3', name: 'Minerva McGonagall', number: '645-17-79' },
      { id: 'id-4', name: 'Remus Lupin', number: '227-91-26' },]

export const App = () => {
  const [contacts, setContacts] = useState(()=>{return JSON.parse(window.localStorage.getItem(storageKey)) ?? phoneContacts});
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem(storageKey,JSON.stringify(contacts));
  },[contacts])

  const addContact = newContact => {
    const anExistingContact = contacts.some(({ name }) => name.toLowerCase() === newContact.name.toLowerCase());

    if (anExistingContact) {
      alert(`${newContact.name} is already in contacts`);
      return;
    };

    setContacts(prevState=>[...prevState, { id: nanoid(), ...newContact }])
  };

  const changeFilter = event => {
    setFilter(event.target.value.trim())
  };

  const removeContact = contactId => {
    setContacts(prevState =>prevState.filter(({id}) =>id !== contactId))
  }

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

    const visibleContacts =getVisibleContacts();


    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAdd={addContact} />
       
        <h2>Contacts</h2>
        <Filter
            filter={filter}
            onChangeFilter={changeFilter}
        />
        <ContactList
          contacts={visibleContacts}
          onRemoveContact = {removeContact}
        />
      </div>
    )
  }

export default App;
