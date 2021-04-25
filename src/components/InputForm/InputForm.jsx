import { Component } from "react";
import ContactsBook from "../ContactsBook/ContactsBook";
import styles from "./InputForm.module.css";
import shortid from 'shortid';
//import { v4 as uuidv4 } from 'uuid';

const nameInputId = shortid.generate();

class InputForm extends Component { 
    state = {
        contacts: [],
        name: '',
    }

    handleChange = (element) => {
        const { name, value } = element.target;
        this.setState ({ [name]: value }); 
    };

    handleSubmit = (el) => {
        el.preventDefault();
        const { name } = this.state;
        const contactName = { name, id: shortid.generate()};
        this.setState((prevState) => ({
            contacts: [...prevState.contacts, contactName,]
        }));
    }

   render() {
    //    const { contacts } = this.state;
    //    console.log(contacts)
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
                <button className={styles.button_prime} type="submit" >Add contact</button>
            </form>            
            {this.state.contacts.length !== 0 && 
            <ContactsBook phoneBook={this.state.contacts}/>
            }
            

        </>
    )
   }
}

export default InputForm;