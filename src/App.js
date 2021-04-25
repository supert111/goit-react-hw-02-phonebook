import { Component } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
//import shortid from 'shortid';

//const nameContactId = shortid.generate();
// import MyFirstComponent from './components/MyFirstComponent';
// import MySecondComponent from './components/MySecondComponent';


class App extends Component { 
    // state = {
    //     contacts: [],
    //     name: '',
    // }


    render() {
        return (
            <div>
                <h1>Phonebook</h1>
                <ContactForm />
            </div>
        )
    }
}
export default App;