export default (state = {}, action) => {
     switch (action.type) {
        case 'USER_INFO_ADD':
            return {
                data:action.data
            }
        case 'USER_INFO_REMOVED':
            return {}
        case 'USER_INFO_SAVED':
            return {}
        default:
            return state
    }
}