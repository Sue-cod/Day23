import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
    state = {
      characters: [],
    }
    }
    state = {
        characters: [  
            {
                firstName: 'Lary',
                lastName: 'Page',
            },
            {
                firstName: 'Ada',
                lastName: 'Lovelace',
            },
            {
                firstName: 'Alan',
                lastName: 'Turing',
            },
        ],
    }
        render() {
            const { characters } = this.state;
            return (
            <div className="container">
                <Table characterData={characters}
                removeCharacter={this.removeCharacter} />
             <Form handleSubmit={this.handleSubmit} /> 
            </div>
        );
    }


handleSubmit = (character) => {
  this.setState({characters: [...this.state.characters.character]})
}

export default App;