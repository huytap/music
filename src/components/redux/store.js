import { createStore , combineReducers , applyMiddleware} from 'redux';
import {songReducer} from './reducer/songReducer'
import thunk from 'redux-thunk';

const reducer = combineReducers({
    songs : songReducer
})

//https://github.com/reduxjs/redux-thunk

const store = createStore(reducer, applyMiddleware(thunk));

export default store;