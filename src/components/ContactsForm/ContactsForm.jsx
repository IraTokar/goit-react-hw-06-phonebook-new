import React, { useState } from 'react';
import {Form, Input, Button} from './ContactsForm.styled';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { getVisibleContacts } from '../../redux/selectors';
import { addContacts } from '../../redux/contactsSlice';

const nameId = nanoid();
const numberId = nanoid();

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getVisibleContacts);
  const dispath = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();

    const anExistingContact = contacts.some(contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim());
  
    if (anExistingContact) {
      alert(`${name} is already in contacts`);
      return;
    }
    
    dispath(addContacts({ name, number }));
    setName('');
    setNumber('');
  };

  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  }

  return (
    <Form onSubmit = {handleSubmit}>
    <label htmlFor={nameId}>Name</label>
      <Input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces."
        required />
    

    <label htmlFor={numberId}>Number</label>
      <Input
        type='tel'
        name="number"
        value={number}
        onChange={handleChange}
        pattern="^\+?[0-9\s\-\(\)]{7,20}$"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required />

      <Button  type="submit">Add contact</Button>
    

  </Form>
  )

} 

export default ContactForm;