import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import api from './api/miApi'
import Form from './components/Form'

class App extends Component {
  constructor() {
    super()

    this.state = { data: [] }
  }

  componentDidMount() {
    api.list()
      .then(({ data }) => {
        this.setState({ data })
      })
      .catch(console.error)
  }

  render() {
    return (
      <div className="App">
        <Form inputs={['name', 'surname', 'email', 'username', 'password']} />
        <ul>
          {this.state.data.map(user => <li key={user.id}>{`${user.name} ${user.surname}`}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
