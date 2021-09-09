import React from 'react';
import {connect} from 'react-redux'
import {createAccount} from '../actions/auth';
import moment from'moment'

class CreateAccount extends React.Component {
    constructor(props){
        super(props)
        console.log('CreateAccount', props)
        this.state = {
            first_name: '',
            last_name: '',
            address: '',
            email: '',
            username: '',
            password: '',
            dateCreated: null,
            dateLastLogin: null
        }
    }
    onFirstNameChange = (e) => {
        const first_name = e.target.value
        this.setState(()=>({ first_name }))
    }
    onLastNameChange = (e) => {
        const last_name = e.target.value
        this.setState(()=>({ last_name }))
    }
    onAddressChange = (e) => {
        const address = e.target.value
        this.setState(()=>({ address }))
    }
    onEmailChange = (e) => {
        const email = e.target.value
        this.setState(()=>({ email }))
    }
    onPasswordChange = (e) => {
        const password = e.target.value
        this.setState(()=>({ password }))
    }
    onSubmit = (e) => {
        e.preventDefault()
        this.setState(()=>({
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            address: this.state.address,
            email: this.state.email,
            password: this.state.password,
            dateCreated: moment(),
            dateLastLogin: moment()
        }))
        this.props.createUserAccount(this.state)
    }
    render() {
        return (
            <div className="box-layout">
                <div className="box-layout__box">
                    <h1 className="box-layout__title">
                        Create Account
                    </h1>
                    <p>create an account with us.</p>
                <form className="form" >
                        <input type='text' 
                            placeholder='first name' 
                            name='first_name'
                            autoFocus
                            className="text-input"
                            value={this.state.first_name}
                            onChange={this.onFirstNameChange}
                        required/>
                        <input type='text' 
                            placeholder='last name' 
                            name='last_name'
                            className="text-input"
                            value={this.state.last_name}
                            onChange={this.onLastNameChange}
                        required/>
                        <input type='text' 
                            placeholder='address' 
                            name='address'
                            className="text-input"
                            value={this.state.address}
                            onChange={this.onAddressChange}
                        required/>
                        <input type='text' 
                            placeholder='email'
                            name='email'
                            className="text-input"
                            value={this.state.email}
                            onChange={this.onEmailChange}
                        required/>
                        <input type='password' 
                            placeholder='password' 
                            name='password'
                            className="text-input"
                            value={this.state.password}
                            onChange={this.onPasswordChange}
                        required/>
                        <button className="button" onClick={this.onSubmit}>Create</button>
                    </form>
                        <button className="button button--link" onClick={()=>{this.props.exitCreatePage()}}>Sign In</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
  createUserAccount: (user) => dispatch(createAccount(user))
})

export default connect(undefined, mapDispatchToProps)(CreateAccount);
