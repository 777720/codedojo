import React, { Component } from 'react'
import DaterApp from './apps/DaterApp'
class ExampleApp extends Component {
  static defualtProps = {
  }
  static propTypes = {
  }
  constructor(props) {
    super(props)
    this.state = {
      value: new Date(),
      valueStr: '2010-01-01',
    }
  }
  onOk = (value, valueStr) => {
    this.setState({
      value,
      valueStr,
    })
  }
  render() {
    const {
      value,
      valueStr,
    } = this.state
    return (
      <div>
        日历插件
        {valueStr}
        <DaterApp
          showTime
          value={value}
          onOk={this.onOk}
          showOk
          timeStep={60}
          defaultTimeType={'end'}
        />
      </div>
    );
  }
}
export default ExampleApp
