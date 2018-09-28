import React, { Component } from 'react';
import { Input, Button, Message } from 'antd';

import Test from '@/Test/Test';
import './style.scss';
import api from 'api';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
    };
  }
  componentDidMount() {
  }
  login = () => {
    const { name, password } = this.state;
    api.login({ name, password }).then(res => {
      Message.success(res.message);
      // this.props.history.push()
      api.test();
    });
  }
  render() {
    return (
      <div className="login">
        <Input
          onChange={o => {

            this.setState({
              name: o.target.value,
            });
          }}
        />
        <Input
          onChange={o => {

            this.setState({
              password: o.target.value,
            });
          }}
        />
        <Button onClick={this.login} >登录</Button>
      </div >
    );
  }
}
