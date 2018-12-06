import React, { Component } from 'react';
import 'src/redux';
import Test from '@/Test/Test';
import './style.scss';
import api from 'api';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }
  componentDidMount() {
    api.test({ name: 'zhoutian', password: '222', confirmPassword: '123456' }).then(res => {
      console.log(res);
    });
  }
  click = () => {
    this.setState({
      visible: false,
    })
  }
  render() {
    const { visible } = this.state;
    return (
      <div className="home">
        <Test>
          <div>111</div>
        </Test>
        <a onClick={this.click}>dfshgdgs</a>
      </div >
    );
  }
}
