import { nanoid } from 'nanoid';
import css from './Contacts.module.css'
import PropTypes from 'prop-types';

const ContactsList = ({contacts}) => {
 return (
    <>
    <ul>
        {contacts.map(({id, name, number}) => {
            id = nanoid();
         return (<li className={css.contact} key={id}>{name}: {number}</li>)
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