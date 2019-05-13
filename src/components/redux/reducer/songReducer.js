export function songReducer(state = [] , action){
    if(action.type === "SET_ALL_SONGS") return action.songs;

    if(action.type === "REMOVE_SONG"){
        const newWords = state.filter(w => w.id !== action.id);
        return newWords;
    }
    if(action.type === 'ADD_SONG'){
        let newSongs = Object.assign([] , state);
        //newWords.unshift(action.song);
        return newSongs;
    }
    return state;
}