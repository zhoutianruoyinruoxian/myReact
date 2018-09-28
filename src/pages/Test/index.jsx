import React, { Component } from 'react';

import { Radio } from 'antd';
import ReactGantt from './Gantt';
import _ from 'lodash';
import moment from 'moment';
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewMode: 'Day',
      task:{

      },
      tasks: [
        {
          id: 'Task 1',
          name: 'Redesign website',
          start: moment().startOf('day').format('YYYY-MM-DD HH:mm:ss'),
          end: moment().format('YYYY-MM-DD HH:mm:ss'),
          progress: 200,
          disabled: true,
        },
        {
          id: 'Task 2',
          name: 'Redesign website',
          start: moment().startOf('day').format('YYYY-MM-DD HH:mm:ss'),
          end: moment().endOf('day').format('YYYY-MM-DD HH:mm:ss'),
          progress: 20,
          dependencies: 'Task 1',
          disabled: false,
        },
        {
          id: 'Task 3',
          name: 'Redesign website',
          start: moment().startOf('day').format('YYYY-MM-DD HH:mm:ss'),
          end: moment().endOf('day').format('YYYY-MM-DD HH:mm:ss'),
          progress: 20,
          dependencies: 'Task 1,Task 2',
          disabled: false,
        },
      ]
    };
  }
  componentDidMount(){
   console.log(this.state.tasks[2]) 
  }
  customPopupHtml = task => {
    return `
      <div class="details-container">
        <h5>${task.name}</h5>
        <p>开始时间：${this.state.start}</p>
        <p>结束时间：${this.state.end}</p>
        <p>${task.progress}% completed!</p>
      </div>
    `;
  };
  onClick = (task) => {
    // console.log(task, 333)
  }

  onDateChange = (task, start, end) => {
    start = moment(start).format('YYYY-MM-DD HH:mm:ss');
    end = moment(end).format('YYYY-MM-DD HH:mm:ss');
    const tasks = _.cloneDeep(this.state.tasks);
    const index = tasks.findIndex(o => o.id === task.id);
    tasks[index] = Object.assign({}, tasks[index], { start }, { end });
    this.setState({
      start,
      end,
      task,
      tasks,
    })
  }

  onProgressChange = (task, progress) => {
    this.setState({
      progress,
      task,
    })

  }
  changeModel = (e) => {
    const value = e.target.value;
    this.setState({
      viewMode: value
    })
  }
  onMouseUp = () => {

  }
  render() {
    return (
      <div className="examples">
        <div className="parent">
          <label> render ReactGantt Component </label>
          <div style={{ overflow: 'scroll' }}>
            <ReactGantt
              tasks={this.state.tasks}
              viewMode={this.state.viewMode}
              customPopupHtml={this.customPopupHtml}
              onClick={this.onClick}
              onDateChange={this.onDateChange}
              onMouseUp={this.onMouseUp}
              onProgressChange={this.onProgressChange}
            // scrollOffsets={this.state.scrollOffsets}
            />
          </div>
        </div>
        <div className="details-container">
          <h5>{this.state.task.name}</h5>
          <p>开始时间：{this.state.start}</p>
          <p>结束时间：{this.state.end}</p>
          <p>{this.state.task.progress}% completed!</p>
        </div>
        {/* <Radio.Group value={this.state.viewMode} onChange={this.changeModel}>
          <Radio value="Month">月</Radio>
          <Radio value="Day">天</Radio>
          <Radio value="Quarter Day">4小时</Radio>
          <Radio value="Hour">1小时</Radio>
        </Radio.Group> */}
      </div>
    );
  }
}
