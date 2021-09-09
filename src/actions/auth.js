import {firebase, googleAuthProvider} from '../../firebase/firebase'

export const login = (uid) => ({
    type: 'LOGIN',
    uid
})

export const startGoogleAuthLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider)
    }
}

export const startLogin = ({email, password}) => {
    return () => {
        return firebase.auth().signInWithEmailAndPassword(email, password)
    }
}

export const logout = () => ({
    type: 'LOGOUT',
})

export const startLogOut = () => {
    return () => {
        return firebase.auth().signOut()
    }
}

export const createAccount = (user) => {
    return (dispatch, getState) => {
      let {email, password} = user
      firebase.auth().createUserWithEmailAndPassword(email, password).then((data)=>{
        console.log(data)
        //setUserData(user)
        dispatch(confirmAccountCreated())
      })
        .catch(function(error) {
            let errorCode = error.code;
            let errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        });  
    }
}

export const setUserData = (user) => {
    return () => {

    }
}

export const confirmAccountCreated = () => ({
    type:'CREATED_ACCOUNT',
})