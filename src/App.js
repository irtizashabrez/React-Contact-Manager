import React, {useState, useEffect } from 'react';
import "./App.css"; 
import Header from './components/Header';
import { v4 as uuid } from 'uuid';
import AddContacts from './components/AddContacts';
import ContactList from './components/ContactList';

function App() {

  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []);
  
  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  }

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts]);

  return (
    <div className='ui container'>
      <Header/>
      <AddContacts addContactHandler = { addContactHandler } />
      <ContactList contacts={ contacts } getContactId = { removeContactHandler } />
    </div>
  );
}

export default App;
