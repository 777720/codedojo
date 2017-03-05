import React, { PropTypes } from 'react'
import { Wrapper } from 'react-partflux'
import addYearAction from '../../actions/addYearAction'
import subYearAction from '../../actions/subYearAction'
import addMonthAction from '../../actions/addMonthAction'
import subMonthAction from '../../actions/subMonthAction'

class CalendarHeader extends React.Component {
  static defaultProps = {

  }
  static propTypes = {
    value: PropTypes.object,
    addYearAction: PropTypes.func,
    subYearAction:PropTypes.func,
    addMonthAction: PropTypes.func,
    subMonthAction: PropTypes.func,
  }
  addYear = () => {
    this.props.addYearAction(1)
  }
  subYear = () => {
    this.props.subYearAction(1)
  }
  addMonth = () => {
    this.props.addMonthAction(1)
  }
  subMonth = () => {
    this.props.subMonthAction(1)
  }


  render() {
    const { value } =this.props
    return (
      <div className='calendar-head'>
        <div style={{ position: 'relative' }}>
          <a className="calendar-prev-year-btn" onClick={this.subYear}></a>
          <a className="calendar-prev-month-btn" onClick={this.subMonth}></a>
          <span className="calendar-my-select">
            {value.year()}年{value.month() + 1}月
          </span>
          <a className="calendar-next-month-btn" onClick={this.addMonth}></a>
          <a className="calendar-next-year-btn" onClick={this.addYear}></a>
          <a></a>
        </div>
      </div>
    )
  }
}
const propsFn = (state, global) => ({value: state.value})
export default () => (
  <Wrapper propsFn={propsFn}>
    <CalendarHeader />
  </Wrapper>
)
