import React from "react";
import {ContactsItem, Button} from './ContactsList.styled';

const ContactList = ({ contacts,onRemoveContact }) => {
    return (
        <div>
            <ul>
                {contacts && contacts.map(contact => (
                    <ContactsItem key={contact.id}>
                        {contact.name + ': ' + contact.number}
                        {<Button
                            type='button'
                            name='delete'
                            onClick={()=>onRemoveContact(contact.id)}
                            >delete</Button>}
                    </ContactsItem>
                ))}
            </ul>
        </div>
    )
};

export default ContactList;

