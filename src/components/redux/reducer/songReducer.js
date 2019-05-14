export function songReducer(state = [] , action){
    if(action.type === "SET_ALL_SONGS") return action.dsbaihat;
    // if(action.type === "REMOVE_SONG"){
    //     const newWords = state.filter(w => w.id !== action.id);
    //     return newWords;
    // }
    if(action.type === 'ADD_SONG'){
        let newSongs = Object.assign([] , state);
        return newSongs;
    }
    return state;
}