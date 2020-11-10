import React from 'react';
import { Component } from 'react';

class User extends Component {
    constructor(props) {
    super (props)
    
      this.state = {
        companyName: ""
      }
       // this.updateSetState = this.updateSetState.bind(this);
    }

    changeText(event) {
      this.setState({
        companyName: event.target.value
      });
    }
  render() {
      return (
        <div>
          <h2>Simple Event Example</h2>
          <input type="text" id="companyName" onChange={this.changeText.bind(this)}></input>
          <h4>You Entered: {this.state.companyName}</h4>
        
          </div>
      )
  }


}
export default User;

