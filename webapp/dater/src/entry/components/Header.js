import React,{ PropTypes } from 'react'
import moment from 'moment'
import { Wrapper } from 'react-partflux'
import inputValueActionFn from '../actions/inputValueAction'

class Header extends React.Component {
  static defaultProps = {

  }
  static PropTypes = {

  }
  constructor(props) {
    super(props)
    this.state = {
      value: props.valueStr
    }
  }
  onKeyDown = (e) => {
    if (e && e.keyCode === 13) {
      this.commit()
    }
  }
  commit = () => {
    const {
      format,
      inputValueAction,
    } = this.props
    const newValue = moment(this.state.value,format).clone()
    if (newValue.isValid()) {
      inputValueAction(newValue)
    }
  }
  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  }
  render() {

    const {
      value
    } = this.state
    return(
      <div>
        <input
          type="text"
          value={value}
          onKeyDown={this.onKeyDown}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}
const propsFn = (state,global) => {
  const { value } = state
  const { format } = global
  const valueStr = value.format(format)
  return {
    format,
    valueStr
  }
}
const actions = {
  inputValueAction: inputValueActionFn,
}
export default () => (
  <Wrapper propsFn={propsFn} actions={actions}>
    <Header />
  </Wrapper>
)
