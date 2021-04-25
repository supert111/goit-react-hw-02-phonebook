import styles from "./Input.module.css";

const Input = () => {
    return (
        <div className={styles.wrapper}>
            <label>Name
                <input className={styles.input_display}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                />
            </label>
            <button className={styles.button_prime}>Add contact</button>
        </div>
    )
}

export default Input;