import React from 'react';
import {connect} from 'react-redux'
import {startLogin, startGoogleAuthLogin} from '../actions/auth'
import CreateAccount from '../components/CreateAccount';

export class LoginPage extends React.Component {
  constructor(props){
      super(props)
      this.state = {toggle: false}
  }
  onSubmit = (e) => {
    console.log('e', e)
    e.preventDefault()
    this.props.startLogin({
        email:document.getElementById("email").value,
        password:document.getElementById("password").value
    })
  }
  onGoogleAuth = () => {
    this.props.startGoogleAuthLogin()
  }
  toggleView = () => {
    this.setState(()=>({toggle: !(this.state.toggle)}))
  }
  render() {
    return (
        <div>
            {this.state.toggle && <CreateAccount exitCreatePage={this.toggleView}/>}
            {!this.state.toggle && <div className="box-layout">
                <div className="box-layout__box">
                    <h1 className="box-layout__title">
                        Expensify
                    </h1>
                    <p>It's time to get your expenses under control.</p>
                    <form className="form" onSubmit={this.onSubmit}>
                        <input id='email' type='text' className="text-input" placeholder='email' required />
                        <input id='password' type='password' className="text-input" placeholder='password' required />
                        <button className="button">Login</button>
                    </form>
                    <button className="button" onClick={this.onGoogleAuth}>Login with Google</button>
                    <button className="button button--link" onClick={this.toggleView}>Create Account</button>
                </div>
            </div>}
        </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: ({email, password}) => dispatch(startLogin({email, password})),
    startGoogleAuthLogin: () => dispatch(startGoogleAuthLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)