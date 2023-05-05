import css from './ContactsList.module.css'
import PropTypes from 'prop-types';

const ContactsList = ({contacts, deleteContact}) => {
 return (
    <>
    <ul>
        {contacts.map(({id, name, number}) => {
         return (
            <div className={css.container}>
              <li className={css.contact}
                 key={id}>
                {name}: {number}
                <button type='button'
                 className={css.deleteButton}
                 onClick={()=> deleteContact(id)}>Delete
                </button>
              </li>
           </div>
         )
        })
        } 
    </ul>
    </> 
 )
};

export default ContactsList;

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    deleteContact: PropTypes.func.isRequired,
}