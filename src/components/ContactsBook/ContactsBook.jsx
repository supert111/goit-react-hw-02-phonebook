

const ContactsBook = ({phoneBook}) => {
    return (
        <>
            <h2>Contacts</h2>
            <ul>
                {phoneBook.map(nameContact => (
                     <li key={nameContact.id}>{nameContact.name}: {nameContact.number}</li>
                ))}
            </ul>
        </>
    )
}

export default ContactsBook;