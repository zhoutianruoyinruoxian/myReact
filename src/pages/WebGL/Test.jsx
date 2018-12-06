import React, { Component } from 'react';
import gl from './test.js';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    this.canvas.setAttribute('width', window.innerWidth);
    this.canvas.setAttribute('height', window.innerHeight);
    gl(this.canvas);
  }

  componentDidUpdate = () => false


  render() {
    return (
      <div className="home">
        <canvas id="glcanvas"  ref={ref => this.canvas = ref}>
          Your browser doesn't appear to support the HTML5 <code>&lt;canvas&gt;</code> element.
        </canvas>
      </div >
    );
  }
}
