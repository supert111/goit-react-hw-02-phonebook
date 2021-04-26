import PropTypes from 'prop-types';

const ContactList = ({ phoneBook, onDeleteContact }) => {
    return (
        <>
            <ul>
                {phoneBook.map(nameContact => (
                     <li key={nameContact.id}>{nameContact.name}: {nameContact.number}
                     <button type="button" onClick={()=>onDeleteContact(nameContact.id)}>Delete</button>
                     </li>
                ))}
            </ul>
        </>
    )
}

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