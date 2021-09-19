import database from '../../firebase/firebase'

export const addUserInfo = (data) => ({
    type:'USER_INFO_ADDED',
    data
})

export const removeUserInfo = () => ({
    type:'USER_INFO_REMOVED'
})

export const startSetUserInfo = () => {
     return (dispatch, getState)=>{
        const uid = getState().auth.uid
        database.ref(`users/${uid}/user_info`).push(getState().auth.user_info).then(()=>{
            dispatch(SetUserInfo())
        }).catch((e)=>{
            console.log("ERROR with startSetUserInfo: ", e)
        })
    }
}

export const SetUserInfo = () => ({
    type:'USER_INFO_SAVED'
})