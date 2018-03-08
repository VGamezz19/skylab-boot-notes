import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import api from './api/miApi'
import Form from './components/Form/Form'

class App extends Component {
  constructor() {
    super()

    this.state = { data: [] }
  }

  list() {
    return api.list()
      .then(({ data }) => {
        this.setState({ data })
      })
  }

  componentDidMount() {
    this.list()
      .catch(console.error)
  }

  create = (user) => {
    const { name, surname, email, username, password } = user

    api.create(name, surname, email, username, password)
      .then((res) => {

        if (res.status === 'OK') {
          return this.list()
        }

        return console.error(res.error)

      })
      .catch(console.error)
  }

  render() {
    return (
      <div className="App">
        <Form inputs={['name', 'surname', 'email', 'username', 'password']} onHandlerSubmit={this.create} />
        <ul>
          {this.state.data.map(user => <li key={user.id}>{`${user.name} ${user.surname}`}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
