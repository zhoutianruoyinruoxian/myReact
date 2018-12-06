import React, { Component } from 'react';
import utils from 'src/utils/utils.js';
// import math from 'src/utils/math';

const math = require('src/utils/math').default();

export default class A extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    math.get();

  }
  click = () => {
    math.get();
  }
  render() {
    return (
      <div>
        <button onClick={this.click}>button</button>
      </div>
    )
  }
}