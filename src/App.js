import { Component } from "react";
import Input from "../src/components/Input/Input";
// import MyFirstComponent from './components/MyFirstComponent';
// import MySecondComponent from './components/MySecondComponent';


class App extends Component { 
    state = {
        contacts: [],
        name: '',
    }

    render() {
        return (
            <div>
                <h1>Phonebook</h1>
                <Input />
            </div>
        )
    }
}
export default App;