import React, { Component } from 'react';
import Song from './Song';
import Form from './Form';
import {connect} from 'react-redux';
import * as actioncreators from './redux/actioncreators'
//import Player from './Player';
class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            link: ''
        }
        // this.loadYoutube = this.loadYoutube.bind(this);
    }
    
    componentWillMount(){
        // Neu dung tu android truy vao localhost thong qua ipv4 : http://10.0.0.105:4000/words
        this.props.getAllSong();
    }

    componentDidMount() {
        this.props.getCurrent();
        //this.setState({current: this.props.link_baihat});
    }
    
    // componentWillReceiveProps() {
    //     console.log('componentWillReceiveProps');
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    
    //     return true;
    // }

    // componentWillUpdate() {
    //     console.log('componentWillUpdate');
    // }
    
    // componentDidUpdate() {
    //     console.log('componentDidUpdate');
    // }
    
    // componentWillUnmount() {
    //     console.log('componentWillUnmount');
    // }
    // loadYoutube(){
    //     var tag = document.createElement('script');

    //     tag.src = "https://www.youtube.com/iframe_api";
    //     var firstScriptTag = document.getElementsByTagName('script')[0];
    //     firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    //     // 3. This function creates an <iframe> (and YouTube player)
    //     //    after the API code downloads.
    //     var player;
    //     function onYouTubeIframeAPIReady() {
    //         player = new YT.Player('youtube', {
    //         height: '390',
    //         width: '640',
    //         videoId: this.props.linkcurrent,
    //         events: {
    //             'onReady': onPlayerReady,
    //             'onStateChange': onPlayerStateChange
    //         }
    //         });
    //     }

    //     // 4. The API will call this function when the video player is ready.
    //     function onPlayerReady(event) {
    //         event.target.playVideo();
    //     }

    //     // 5. The API calls this function when the player's state changes.
    //     //    The function indicates that when playing a video (state=1),
    //     //    the player should play for six seconds and then stop.
    //     var done = false;
    //     function onPlayerStateChange(event) {
    //         if (event.data == YT.PlayerState.PLAYING && !done) {
    //         setTimeout(stopVideo, 6000);
    //         done = true;
    //         }
    //     }
    //     function stopVideo() {
    //         player.stopVideo();
    //     }
    // }
    render() {
        return (
            <div className="row">
                <div className="col-sm-3">
                    <ul className="word-container">
                        {
                            this.props.songs.map( baihat => 
                                <Song
                                    baihat={baihat} 
                                    key={baihat.id}/> ) 
                        }
                    </ul>
                </div>
                <div class="col-sm-9">
                    {/* <iframe id="ytplayer" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="800" height="500" src="https://www.youtube.com/embed/?enablejsapi=1&amp;origin=http%3A%2F%2Fsharetube.io&amp;widgetid=1"></iframe> */}
                    {/* <Player/> */}

                    <iframe id="youtube" width="100%" height="500" src={`https://www.youtube.com/embed/${this.props.linkcurrent}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div id="youtube"></div>
                    {/* {this.loadYoutube()} */}
                    <Form />
                </div>
            </div>
        )
    }
}

const mapStateToprops = function(state){
    return {songs : state.songs, linkcurrent: state.aSong}
}
export default connect(mapStateToprops,actioncreators)(List);
