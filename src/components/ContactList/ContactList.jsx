

const ContactList = ({phoneBook}) => {
    return (
        <>
            <ul>
                {phoneBook.map(nameContact => (
                     <li key={nameContact.id}>{nameContact.name}: {nameContact.number}</li>
                ))}
            </ul>
        </>
    )
}

export default ContactList;