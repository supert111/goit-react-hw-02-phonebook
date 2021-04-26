import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ phoneBook, onDeleteContact }) => {
    return (
        <>
            <ul>
                {phoneBook.map(nameContact => (
                     <li className={styles.contact} key={nameContact.id}>{nameContact.name}: {nameContact.number}
                     <button className={styles.button} type="button" onClick={()=>onDeleteContact(nameContact.id)}>Delete</button>
                     </li>
                ))}
            </ul>
        </>
    )
};

ContactList.propTypes = {
    phoneBook: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }),
    ),
    onDeleteContact: PropTypes.func.isRequired,
  };

export default ContactList;