import React, { Component } from 'react'
import {connect} from 'react-redux';
import * as actioncreators from './redux/actioncreators';

class Player extends Component {
    render() {
        return (
            <iframe id="youtube" width="560" height="315" src={`https://www.youtube.com/embed/${this.props.link}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        )
    }
}
export default connect(null,actioncreators)(Player);