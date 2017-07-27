//Importing required packages
import React, { Component, PropTypes } from 'react';
import {Grid, Col, form, FormGroup, FormControl, ControlLabel, HelpBlock, Row, Button} from 'react-bootstrap';
import { checkExisting } from '../../../actions/roomActions';
import { connect } from 'react-redux';


//Importing static assets (i.e. stylesheets, images)
import './LandingFeatures.css';

//Importing React Components

/**
 * LandingAbout
 */

class LandingFeatures extends Component {
  constructor(props) {
    super(props);

    this.state = {
        value: ''
        }
  }


  // getValidationState() {
  //   const length = this.state.value.length;
  //   if (length > 10) return 'success';
  //   else if (length > 5) return 'warning';
  //   else if (length > 0) return 'error';
  // }
  //
  // handleChange(e) {
  //   this.setState({ value: e.target.value });
  // }

  checkExisting = (e) => {
    e.preventDefault();
    let value = e.target.value;
    this.setState({joinroom: value});
    // const roomString = document.getElementById('roomstring').value;
    const joinroom = value;
    console.log(joinroom);
    this.props.checkExisting(joinroom);
  }

  render() {
    return (
      <Grid>

      {/* Join Room Input */}
        <Row>
          <Col md={10} mdOffset={4} sm={8} smOffset={3} xs={11} xsOffset={2} className="landingfeatures-join-rm">

           <FormGroup
             controlId="formBasicText"
             >
             <ControlLabel className="joinRmLabel">Join A Room</ControlLabel>
             <FormControl
               type="text"
               placeholder="Enter Room URL"
               className="joinRmInput"
               id="joinroom"
               onChange={this.checkExisting}
               value={this.state.joinroom}
             />
             <FormControl.Feedback />
             {/*<HelpBlock>Validation is based on string length.</HelpBlock>*/}

              <Button className="Join" disabled={!(this.props.existing)}>Join</Button>

           </FormGroup>
           </Col>
        </Row>

        {/* How to Use Title */}
        <Row>
          <Col md={8} mdOffset={3} sm={8} smOffset={3}>
            <h1 className="how">How to use</h1>
          </Col>
        </Row>

        {/* Featurettes */}
        <Row>
          <Col md={10} mdOffset={2} sm={10} smOffset={2} xs={10} xsOffset={1}>
          {/* make xs stack on top of each other when scaling responsively */}
            <Col md={4} xs={12} className="featureFrame01">
              <div className="features01">About</div>
            </Col>
            <Col md={4} xs={12} className="featureFrame02">
              <div className="features02">Feature</div>
            </Col>
            <Col md={4} xs={12} className="featureFrame03">
              <div className="features03">Hello</div>
            </Col>
          </Col>
        </Row>

      </Grid>

    );
  }

}

export default LandingFeatures;
