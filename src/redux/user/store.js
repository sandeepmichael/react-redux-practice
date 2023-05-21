import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import  UserReducer from './userReducer'

const store = createStore(UserReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;
