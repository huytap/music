import React , {Component} from 'react';
import {connect} from 'react-redux';
import * as actioncreators from './redux/actioncreators';

class Song extends Component{
    constructor(props){
        super(props);
        this.state = {
            current:0
        }
        this.selectSong = this.selectSong.bind(this);
    }
    selectSong(id){
        this.props.setCurrent(id);
    }
    render(){
        const song = this.props.baihat;
        return(            
            <li 
                onClick={() => this.selectSong(song.id)}
                className={(((this.props.current === song.link) || (song.current === 1)) ? 'active' : '')}
            >{song.name}</li>
        )
    }
}
const mapStateToprops = function(state){
    return {current: state.aSong}
}
export default connect(mapStateToprops,actioncreators)(Song);