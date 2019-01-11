import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Home_and_NewUser_reducer, initialState } from '../reducer/mainReducer'


const middlewares = [thunk];

const store = createStore(Home_and_NewUser_reducer, initialState, applyMiddleware(...middlewares))

export default store