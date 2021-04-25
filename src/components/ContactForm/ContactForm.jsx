import { Component } from "react";
import ContactsBook from "../ContactsBook/ContactsBook";
import styles from "./ContactForm.module.css";
import shortid from 'shortid';

const nameInputId = shortid.generate();
const phoneInputId = shortid.generate();

class ContactForm extends Component { 
    state = {
        contacts: [],
        name: '',
        number: '',
    }

    handleChange = (element) => {
        const { name, value } = element.target;
        this.setState ({ [name]: value }); 
    };

    handleSubmit = (el) => {
        el.preventDefault();
        const { name, number } = this.state;
        const contactName = { name, number, id: shortid.generate()};
        this.setState((prevState) => ({
            contacts: [...prevState.contacts, contactName,]
        }));
    }

   render() {
        return (
            <>
                <form className={styles.wrapper} onSubmit={this.handleSubmit}>
                    <label htmlFor={nameInputId}>Name
                        <input className={styles.input_display}
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                            required
                            id={nameInputId}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label htmlFor={phoneInputId}>Number
                        <input className={styles.input_display}
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                            required
                            id={phoneInputId}
                            onChange={this.handleChange}
                        />
                    </label>
                    <button className={styles.button_prime} type="submit" >Add contact</button>
                </form>            
                {this.state.contacts.length !== 0 && 
                <ContactsBook phoneBook={this.state.contacts}/>
                }
            </>
        )
    }
}

export default ContactForm;