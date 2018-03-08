import React, { Component } from 'react';
import Input from './Input/Input'

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
        this.props.onHandlerSubmit(this.state)
    }

    handlerChangeInput = (value, name) => this.setState({ [name]: value })

    render() {
        return (
            <form onSubmit={(e) => { e.preventDefault(); this.onSubmitForm(); }}>
                {
                    this.props.inputs.map((nameInput, index) => {
                        return <Input
                            type={nameInput !== 'email' || nameInput !== 'password' ? 'text' : nameInput}
                            name={nameInput}
                            className='something'
                            key={index}
                            handlerChangeInput={this.handlerChangeInput} />
                    })
                }
                <Input type="submit" name='submit' value="Create New User! " />
            </form>
        )
    }
}

export default Form
