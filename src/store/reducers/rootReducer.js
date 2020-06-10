import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer, 
    firestore: firestoreReducer, //retrieve data from db
    firebase: firebaseReducer, //sync auth status with firebase
});

export default rootReducer;