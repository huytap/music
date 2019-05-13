import React, { Component } from 'react'
import {connect} from 'react-redux';
import * as actioncreators from './redux/actioncreators';


class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            link : ''
        }
        this.addSong = this.addSong.bind(this);
    }
    addSong(){
        this.props.addSong(this.state.link);
        this.setState({link:''});
    }
    render() {
        return (
            <div>
            
                <div className="form-group word-from" >
                    <input
                        placeholder="Nhập link youtube"
                        className="form-control"
                        value={this.state.link}
                        onChange={evt => this.setState({link : evt.target.value})}
                        />
                    <div className="btn-container">
                        <button 
                            onClick={this.addSong}
                            className="btn btn-success">
                            Thêm bài hát
                        </button>
                        <button
                            onClick={evt=>console.log('abc')}
                            className="btn btn-danger">
                            Hủy
                        </button>
                    </div>
                </div> 
            </div>
        )
    }
}

const mapStateToProps = function(state){
    return {shouldShowForm : state.shouldShowForm}
}
export default connect(mapStateToProps,actioncreators)(Form);