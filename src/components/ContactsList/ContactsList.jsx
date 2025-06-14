import React from "react";
import { ContactsItem, Button } from './ContactsList.styled';
import { useDispatch, useSelector } from "react-redux";
import { getVisibleContacts } from "../../redux/selectors";
import { removeContact } from "../../redux/contactsSlice";

const ContactList = () => {
    const contacts = useSelector(getVisibleContacts);
    const dispatch = useDispatch();

    return (
        <div>
            <ul>
                {contacts && contacts.map((contact) => (
                    <ContactsItem key={contact.id}>
                        {contact.name + ': ' + contact.number}
                        {<Button
                            type='button'
                            name='delete'
                            onClick={() => dispatch(removeContact(contact.id))}
                            >delete</Button>}
                    </ContactsItem>
                ))}
            </ul>
        </div>
    )
}

export default ContactList;

