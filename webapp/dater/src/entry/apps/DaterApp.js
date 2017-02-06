import React, { PropTypes } from 'react'
import { Provider } from 'react-partflux'
import moment from 'moment'
import Main from '../components/Main'
import reducers from '../reducers/index'

class DaterApp extends React.Component {
  static defaultProps = {
    value: moment().startOf('minutes'),
    showTime: false,
    defaultTimeType: 'cur',
    timeStep: 30,
  }
  static propTypes = {
    format: PropTypes.object,

  }
  constructor(props) {
    super(props)
    let format = props.format
    if (!format) {
      format = props.showTime ? 'YYYY-MM-DD HH:mm' : 'YYYY-MM-DD'
    }
    const value = moment(props.value).startOf('minutes')
    if (this.props.defaultTimeType === 'start') {
      value.startOf('day')
    } else if (props.defaultTimeType === 'end') {
      value.endOf('day')
    }
    this.state = {
      value,
      open: false,
      format,
    }
  }
  render() {
    const {
      showTime,
      showOk,
      timeStep,
    } = this.props
    const {
      format
    } = this.state
    const global = {
      format,
      showTime,
      showOk,
      timeStep,
    }
    return(
      <Provider
        host={this}
        global={global}
        reducers={reducers}
      >
        <Main />
      </Provider>
    )
  }
}
export default DaterApp
