import React, { Component } from 'react';
import Song from './Song';
import Form from './Form';
import {connect} from 'react-redux';
import * as actioncreators from './redux/actioncreators'
class List extends Component {
    async componentWillMount(){
        // Neu dung tu android truy vao localhost thong qua ipv4 : http://10.0.0.105:4000/words
        await this.props.getAllSong();
        //this.setState({songs : this.props.songs.data})
    }
    // constructor(props){
    //     super(props);
    //     this.state ={
    //         songs : []
    //     }
    // }
    render() {
        return (
            <div className="row">
                <div className="col-sm-3">
                {
                    console.log(this.props.songs)
                    // this.props.songs.data.map(song => <h3>{JSON.stringify(song)}</h3>)
                        
                }
                </div>            
                <Form />
            </div>
        )
    }
}

const mapStateToprops = function(state){
    return {songs : state.songs}
}
export default connect(mapStateToprops,actioncreators)(List);
