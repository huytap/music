import React , {Component} from 'react';
import {connect} from 'react-redux';
import * as actioncreators from './redux/actioncreators';

class Song extends Component{
    render(){
        const song = this.props.song;
        return(
            <div className="word" >
                <ul className="word-container">
                    <li>{song.link}</li>
                </ul>
            </div>
        )
    }
}

export default connect(null,actioncreators)(Song);