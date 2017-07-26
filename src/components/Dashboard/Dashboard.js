import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signOut } from '../../actions/userActions';
import { getUserRooms } from '../../actions/roomActions';

import Navbar from '../Navbar/Navbar';
import CreateRoom from './CreateRoom/CreateRoom';

import './Dashboard.css';

/**
 * Dash
 */
export class Dashboard extends Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.getUserRooms(this.props.user.uid)
  }

  signOut = (e) => {
    e.preventDefault();
    this.props.signOut();
  }

  roomDisplay = () => {

    const roomArray = [];
    Object.keys(this.props.ownedRooms).forEach((key) => {
      roomArray.push({
        key: key,
        name: this.props.ownedRooms[key].name
      })
    })

    const rooms = roomArray.map((e) => {
      return (
        <div>
          <div className="col-md-6"> Room ID: {e.key} </div>
          <div className="col-md-6"> Room Name: {e.name} </div>
        </div>
      )
    })

    return rooms;

  }

  render() {

    return (
      <div className="container-fluid">
        <Navbar pageTitle="Dashboard"/>
        <div className="row dashTitle">
          <h2>Your Rooms</h2>
        </div>
        <div className="row dashCreate">
          <div className="col-md-4 col-sm-12 col-xs-12 createRoomBtn"> Create A New Room </div>
        </div>
        <div className="row dashList">

        </div>
      </div>
    )

  }
  // render() {
  //
  //   return (
  //     <div className="container-fluid">
  //       <Navbar pageTitle="Dashboard"/>
  //       <div className="row">
  //         <div className="col-sm-6 col-sm-offset-3">
  //           <div className="dashboard" id="Dashboard">
  //             <CreateRoom />
  //             <div>{this.roomDisplay()}</div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
}

const mapStateToProps = (state) => {
  //console.log('mapStateToProps', state);
  return {
    user: state.user,
    ownedRooms: state.ownedRooms
  }
}

const mapDispatchToProps = (dispatch) => {
  //console.log('ownProps.user.uid', ownProps.user.uid);
  //getUserRooms(dispatch, ownProps.user.uid);
  return {
    signOut: () => {
      dispatch(signOut())
    },
    getUserRooms: (id) => {
      dispatch(getUserRooms(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
