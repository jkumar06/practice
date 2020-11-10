import React, { Component } from 'react';

class Jagadeesh extends Component {

  constructor(props) {
    super(props);
    this.state = {
      msg: "hii jagadesh"
    }
  //  this.updateSetState = this.updateSetState.bind(this);
 }

    changeText(event) {
      this.setState({
        msg: event.target.value
      });
    }

  render() {
    return (
      <div>
      <h2>Example</h2>
      <input type='text' id="msg" onChange={this.changeText.bind(this)}/>
      <h2>you entered: {this.state.msg}</h2>
      </div>
    )
  }

}


export default Jagadeesh;