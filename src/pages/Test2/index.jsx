import React, { Component } from 'react';
import utils from 'src/utils/utils.js';
import math from 'src/utils/math';


export default class Test2 extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    console.log(math.isOdd(1),333)
  }
  render() {
    return (
      <div>
      </div>
    )
  }
}