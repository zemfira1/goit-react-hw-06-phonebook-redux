import { List } from './ContactList.styled';
import { ContactItem } from './ContactItem';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export const ContactList = () => {
  const contacts = useSelector(state => state.contactsList.contacts);
  const filter = useSelector(state => state.filter.filter);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <>
      {filteredContacts.length > 0 && (
        <List>
          {filteredContacts.map(({ id, name, number }) => (
            <ContactItem key={id} name={name} number={number} id={id} />
          ))}
        </List>
      )}
    </>
  );
};
