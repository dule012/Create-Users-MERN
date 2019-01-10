import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { reducer, initialState } from '../reducer/mainReducer'


const middlewares = [thunk];

const store = createStore(reducer, initialState, applyMiddleware(...middlewares))

export default store