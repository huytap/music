import axios from 'axios';
const rootURL = 'http://dev.onlinesolutions.vn/music/api/';
export function getAllSong(){
    return function(dispatch){
        const URL = rootURL+"getlist";
        //const URL = "http://localhost/music/api/getlist";
        axios.get(URL)
        .then(response => {
            if(!response.data.songs.data) {
                //console.log(response.data.songs);return;
                throw new Error("Không có bài nào");
            }else{
                dispatch({type : 'SET_ALL_SONGS' , dsbaihat : response.data.songs.data})
            }
        });
    }
}

export function setCurrent(song_id){
    return function(dispatch){
        const URL = rootURL+"setcurrent";

        axios.post(URL , JSON.stringify({song_id}))
        .then(response => {
            //console.log(response.data.song.link)
            if(!response.data.song.link) throw new Error("Không thể chuyển bài");
            dispatch({type : 'SET_CURRENT_SONG' , linkdangchay : response.data.song.link })
        })
        .catch(error => console.log(error.message));
    }
}

export function getCurrent(){
    return function(dispatch){
        const URL = rootURL+"getcurrent";

        axios.get(URL)
        .then(response => {
            //console.log(response.data.song.link)
            if(!response.data.song.link) throw new Error("Không thể chuyển bài");
            dispatch({type : 'GET_CURRENT_SONG' , link_baihat : response.data.song.link })
        })
        .catch(error => console.log(error.message));
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
        const URL = rootURL+"addsong";

        axios.post(URL , JSON.stringify({link}))
        .then(response => {
            console.log(response)
            if(!response.data.song) throw new Error("Can not add song");
            dispatch({type : 'ADD_SONG' , song : response.data.data })
        })
        .catch(error => alert(error.message));
    }
}