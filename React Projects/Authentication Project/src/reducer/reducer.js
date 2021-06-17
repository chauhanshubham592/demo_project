import { combineReducers } from 'redux'
import authenticationReducer from './authenticationReducer'
import userManagementReducer from './userManagementReducer'

export default combineReducers({
    authDetails: authenticationReducer,
    userInfo: userManagementReducer
})