import { nanoid } from 'nanoid';

const ContactsList = ({contacts}) => {
 return (
    <>
    <ul>
        {contacts.map(({id, name, number}) => {
            id = nanoid();
         return (<li key={id}>{name}: {number}</li>)
        })
        } 
    </ul>
    </> 
 )
};

export default ContactsList;