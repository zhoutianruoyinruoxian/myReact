import React, { Component } from 'react';
import 'src/redux';
import './style.scss';
import api from 'api';
import { connect } from 'react-redux';
import { mapMutations } from 'src/redux';

const mapStateToProps = (state, router) => {
  return {
    title: state.app.title,
  };
};

const mapDispatchToProps = () => {
  return {
    changeTitle: mapMutations.app.changeTitle,
  };
};

// const mapDispatchToProps2 = mapDispatchToPropsInit((mutations)=>{

// });
@connect(mapStateToProps, mapDispatchToProps)
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      // title: store.getState().title,
    };
  }

  componentDidMount() {
    // console.log(this.props)
    // api.test({ name: 'zhoutian', password: '222', confirmPassword: '123456' }).then(res => {
    //   console.log(res);
    // });

    const a = {};
    const b = new Proxy(a, {
      get(obj, prop, proxy) {
        console.log('get')
        const res = Reflect.get(...arguments);
        return res;
      },
      set(obj, prop, value, proxy) {
        console.log('set')
        const res = Reflect.set(...arguments);
        return res;
      }

    })
    console.log(b, 'b');
    console.log(a, 'a');
    b.f = 4;
    console.log(b.f, 'b');
    console.log(a.f, 'a');
    a.f = 6;
    console.log(b.f, 'b');
    console.log(a.f, 'a');
    b.h = 55
  }

  click = () => {
    this.props.changeTitle('4444')
  }
  click2 = () => {
    // this.props.changeTitle('哈哈哈');
  }

  render() {
    const { title } = this.props;
    return (
      <div className="home bip">
        <p>{title}</p>
        <button onClick={this.click}>点击</button>
      </div>
    );
  }
}
