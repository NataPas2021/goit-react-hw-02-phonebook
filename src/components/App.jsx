import {Component} from 'react';
import css from './App.module.css';
import Form from './Form/Form';
import ContactsList from './Contacts/ContactsList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  formSubmitHandler = data => {
    console.log(data)
  }
  render() {
  return (
    <div className={css.appContainer}>
      <h1>Phonebook</h1>
      <Form onSubmit={this.formSubmitHandler}/>
      <h2>Contacts</h2>
      <ContactsList contacts={this.state.contacts}/>
      
      
      
    </div>
  );
  }
};
