import { Component } from "react";
import styles from "./InputForm.module.css";
import shortid from 'shortid';

const nameInputId = shortid.generate();
const nameContactId = shortid.generate();

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
        const contactName = { name, id: {nameContactId} };
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
            <>
                <h2>Contacts</h2>
                <ul>
                    <li>{this.state.name}</li>
                </ul>
            </>
            }
            

        </>
    )
   }
}

export default InputForm;