export function selectSongReducer(state=[], action){
    if(action.type === 'SET_CURRENT_SONG') {
        return action.linkdangchay;
    }

    if(action.type === 'GET_CURRENT_SONG') {
        return action.link_baihat;
    }
    return state;
}