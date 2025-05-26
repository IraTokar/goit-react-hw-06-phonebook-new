import React from 'react';
import ContactForm from './ContactsForm/ContactsForm';
import ContactList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import { useSelector } from 'react-redux';
import { getContact } from '../redux/selectors';


export const App = () => {
  const contacts = useSelector(getContact);

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm  />
       
        <h2>Contacts</h2>

        {contacts.length > 0 ? (
          <Filter />
        ) : (
            <p>Your phonebook is empty. Add first contact!</p>
        )}
        {contacts.length > 0 &&(
          <ContactList />
        )}
      </div>
    )
  }

export default App;
