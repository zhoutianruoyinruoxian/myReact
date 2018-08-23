import React, { Component } from 'react';

import Test from '@/Test/Test';
import './style.scss'
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }
  componentDidMount() {

  }
  click = () => {
    this.setState({
      visible: false,
    })
  }
  render() {
    const { visible  } = this.state;
    return (
      <div className="home">
        <Test visible={visible} />
        <a onClick={this.click}>dfshgdgs</a>
      </div >
    );
  }
}
