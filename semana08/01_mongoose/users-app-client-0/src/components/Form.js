import React, { Component } from 'react';
import Input from './Input'

class Form extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            surname: '',
            email: '',
            username: '',
            password: '',
        }
    }

    onSubmitForm = () => {
        console.log(`submit`)
    }

    handlerChangeInput = (value, name) => this.setState({ [name]: value })

    render() {
        return (
            <form onSubmit={(e) => { e.preventDefault(); this.onSubmitForm(); }}>
                {this.props.inputs.map(input => {
                    return <Input type={input !== 'email' || input !== 'password' ? 'text' : input} name={input} className='something' handlerChangeInput={this.handlerChangeInput} />
                })}
                <Input type="submit" name='submit' value="Create New User! " />
            </form>
        )
    }
}

export default Form
