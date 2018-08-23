import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      destory: false,
    };
  }
  componentWillReceiveProps(nextProps) {
    console.log(232323232)
    if (nextProps.visible) {
      this.setState({
        destory: false,
      });
    } else {
      setTimeout(() => {
      this.setState({
        destory: true,
      },
      () => {
        console.log(this.state.destory, 444);
      });
      }
      , 1000)
    }

  }
  render() {
    console.log(11222)
    return (
      <div className={this.props.visible ? '' : 'none'}>
        {!this.state.destory && <span>222</span>}
      </div>
    );
  }
}
