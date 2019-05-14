import { createStore , combineReducers , applyMiddleware} from 'redux';
import {songReducer} from './reducer/songReducer';
import {selectSongReducer} from './reducer/selectSongReducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    songs : songReducer,
    aSong: selectSongReducer,
    
})

//https://github.com/reduxjs/redux-thunk

const store = createStore(reducer, applyMiddleware(thunk));

export default store;