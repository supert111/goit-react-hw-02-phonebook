import { Component } from "react";
import InputForm from "./components/InputForm/InputForm";
//import shortid from 'shortid';

//const nameContactId = shortid.generate();
// import MyFirstComponent from './components/MyFirstComponent';
// import MySecondComponent from './components/MySecondComponent';


class App extends Component { 
    state = {
        contacts: [],
        name: '',
    }

    // handleChange = (element) => {
    //     const { name, value } = element.target;
    //     this.setState ({ [name]: value }); 
    // };

    // handleSubmit = (el) => {
    //     el.preventDefault();
    //     console.log(el)
    //     const contactName = { el, id: {nameContactId} };
    //     this.setState((prevState) => ({
    //         contacts: [...prevState, contactName],
    //     }));
    //     this.props.onSubmit(this.state);
    // }

    render() {
        return (
            <div>
                <h1>Phonebook</h1>
                <InputForm />
            </div>
        )
    }
}
export default App;