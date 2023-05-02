import {Component} from 'react';
import {nanoid} from 'nanoid';

class Form extends Component {
    state = {
        name: '',
        number: ''
    };
    
    inputNameId = nanoid();
    inputNumberId = nanoid();
    
    handleChange = e => {
      console.log(e.currentTarget)
      const {name, value} = e.currentTarget;
      this.setState({[name]: value})
    };

    handleSubmit = e => {
      e.preventDefault();
      this.props.onSubmit(this.state);
      this.reset();
    };

    reset = () => {
      this.setState({name: '',
        number: ''})
    }

    render() {
    return (
     <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.inputNameId}>Name</label>
        <input
             type="text"
             name="name"
             value={this.state.name}
             id={this.inputNameId}
             onChange={this.handleChange}
             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
             required
        />
        
        <label htmlFor={this.inputNumberId}>Phone</label>
        <input
             type="tel"
             name="number"
             value={this.state.number}
             id={this.inputNumberId}
             onChange={this.handleChange}
             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
             required
        />
       
        <button type="submit">Add contact</button>
    </form>
        );
    }
};

export default Form;