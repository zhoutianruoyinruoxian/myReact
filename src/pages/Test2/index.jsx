import React, { Component } from 'react';
import utils from 'src/utils/utils.js';
import type from 'src/utils/type';



export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
    // class A {
    //   constructor() {
    //     this.x = this.x.bind(this);
    //   }
    //   x() {
    //     console.log(this, 11);
    //   }
    //   x2 = () => {
    //     console.log(this, 111);
    //   }
    //   y() {
    //     console.log(this, 22);
    //   }
    // }

    // const B = function () {

    // };
    // B.prototype.x = () => {
    //   console.log(this, 33);
    // };
    // B.prototype.y = function () {
    //   console.log(this, 44);
    // };

    // const a = new A();
    // a.x();
    // a.x2();
    // A.prototype.x();
    // a.y();
    // const b = new B();
    // b.x();
    // b.y();

    // const a = {
    //   x: () => {
    //     console.log(this, 'x')
    //   },
    //   y() {
    //     console.log(this, 'y')
    //   }
    // }
    // const b = a.x;
    // const c = a.y;
    // a.x();
    // a.y();
    // b();
    // c();
    console.log(type(window))
  }
  render() {
    return (
      <div>
      </div>
    )
  }
}