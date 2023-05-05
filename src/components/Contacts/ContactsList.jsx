import { nanoid } from 'nanoid';
import css from './ContactsList.module.css'
import PropTypes from 'prop-types';

const ContactsList = ({contacts, deleteContact}) => {
 return (
    <>
    <ul>
        {contacts.map(({id, name, number}) => {
            id = nanoid();
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
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
}