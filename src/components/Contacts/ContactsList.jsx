import { nanoid } from 'nanoid';

const id = nanoid();

const ContactsList = (contacts) => {
    console.log(contacts)
 return (
    <>
    <ul>
        {contacts.map((contact) => {
            console.log(contact)
         return (<li key={id}>{contact}</li>)
        })
        } 
    </ul>
    </> 
 )
};

export default ContactsList;