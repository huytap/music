import axios from 'axios';
// let config = {
//     headers: {
//       header1: 'value',
//     }
// }
  
// let data = {
//     'HTTP_CONTENT_LANGUAGE': 'vn'
// }
export function getAllSong(){
    return function(dispatch){
        const URL = "http://localhost/music/api/getlist";
        axios.get(URL)
        .then(response => dispatch({type : 'SET_ALL_SONGS' , songs : response.data.songs}));
    }
}

export function removeSong(_id){
    return function(dispatch){
        const URL = "http://localhost:4000/song/";
        axios.delete(URL + _id)
        .then(response => {
            if(!response.data.word) throw new Error("Can not remove song");
            dispatch({type : 'REMOVE_SONG' , _id : response.data.song._id})
        })
        .catch(error => alert(error.message));
    }
}

export function addSong(link){
    return function(dispatch){
        const URL = "http://localhost/music/api/addsong"
        axios.post(URL , {link})
        .then(response => {
            if(!response.data.song) throw new Error("Can not add song");
            dispatch({type : 'ADD_SONG' , song : response.data.song })
        })
        .catch(error => alert(error.message));
    }
}