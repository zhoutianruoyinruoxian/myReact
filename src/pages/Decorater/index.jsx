import React, { Component } from 'react';
import _function from './function.js';

@_function
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }
  componentDidMount() {
    const c = function (_class) {
      _class.prototype.c = function () {

        console.log(this)
        console.log(3333333)
        console.log(this.a, 'cc')
      }
    };
    @c
    class A {
      constructor(a) {
        this.a = a;
      }
      b() {
        console.log(this.a, 'bb')
      }
    }
    const a = new A(33);
    a.c()
  }
  click = () => {
  }
  render() {
    return (
      <div className="home">
      </div >
    );
  }
}
