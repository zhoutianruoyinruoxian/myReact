import React, { Component } from 'react';
import 'src/redux';
import './style.scss';
import api from 'api';
import { connect } from 'react-redux';
import { mutationList } from 'src/redux';

const mapStateToProps = (state, router) => {
  return {
    title: state.app.title
  }
}
const mapDispatchToProps = () => {
  return {
    changeTitle: mutationList.app.changeTitle,
  }
}

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
    console.log(this.props)
    // api.test({ name: 'zhoutian', password: '222', confirmPassword: '123456' }).then(res => {
    //   console.log(res);
    // });
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
