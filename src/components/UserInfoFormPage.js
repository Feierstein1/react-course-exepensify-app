import React, {SetState} from 'react';
import {connect} from 'react-redux'
import {setUserInfo} from '../actions/auth';
import moment from 'moment'

export const UserInfoForm = (props) => {
    const [firstName, setfirstName] = SetState('')
    const [lastName, setlastName] = SetState('')
    const [address, setaddress] = SetState('')

    onSubmit = (e) => {
        e.preventDefault()
        const user_info = {
           firstName,
           lastName,
           address
        }
        console.log('user_info',user_info)
        console.log('user_uid',props.user_uid)
        props.setUserInfo(props.user_uid, user_info)
    }

    return(
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
                                value={firstName}
                                onChange={(e)=>{setfirstName(e.target.value)}}
                            required/>
                            <input type='text' 
                                placeholder='last name' 
                                name='last_name'
                                className="text-input"
                                value={lastName}
                                onChange={(e)=>{setlastName(e.target.value)}}
                            required/>
                            <input type='text' 
                                placeholder='address' 
                                name='address'
                                className="text-input"
                                value={address}
                                onChange={(e)=>{setaddress(e.target.value)}}
                            required/>
                            <button className="button" onClick={this.onSubmit}>Create</button>
                        </form>
                        <button className="button button--link" onClick={()=>{this.props.exitCreatePage()}}>Sign In</button>
                </div>
            </div>
    )
}

const mapStateToProps = (state) => {
  return {
    user_uid: state.auth.uid
  };
}

const mapDispatchToProps = (dispatch) => ({
  setUserInfo: (uid, userInfo) => dispatch(setUserInfo(uid, userInfo))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserInfoForm);