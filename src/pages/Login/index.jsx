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
    api.test({ name, password }).then(res => {
      Message.success(res.message);
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
        <Button onClick={this.login} />
      </div >
    );
  }
}
