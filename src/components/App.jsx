import {Component} from 'react';
import css from './App.module.css';
import Form from './Form/Form';
import ContactsList from './Contacts/ContactsList';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';
import PropTypes, { object } from 'prop-types';

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }
  
  addContact = ({name, number}) => {
    const existName = this.state.contacts
    .map(contact => contact.name)
    .includes(name)
    if(existName) {
      alert(`${name} is elready in contacts!)`)
      return
    } else {
    const newContact= {
      id: nanoid(),
      name,
      number
    }

    this.setState(({contacts}) => ({
      contacts: [newContact, ...contacts],
    }))
  }
  }

  changeFilter = e => { this.setState({filter: e.currentTarget.value});}
  
  getVisibleContacts = () => {
    const {contacts, filter} = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => {
      return (contact.name.toLowerCase().includes(normalizedFilter));
    })
  }

  formSubmitHandler = data => {
    console.log(data)
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

  return (
    <div className={css.appContainer}>
      <h1>Phonebook</h1>
      <Form onSubmit={this.addContact}/>
      <h2>Contacts</h2>
      <Filter text='Search by name' value={this.state.filter} onChange={this.changeFilter}/>
      <ContactsList contacts={visibleContacts}/>
    </div>
  );
  }
};

App.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.arrayOf(object),
}
