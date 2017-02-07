import React, { PropTypes } from 'react'
import { Wrapper } from 'react-partflux'

class CalendarHeader extends React.Component {
  static defaultProps = {

  }
  static propTypes = {

  }
  render() {
    const { value } =this.props
    return (
      <div>
        <div style={{ position: 'relative' }}>
          <a></a>
          <a></a>
          <span>
            {value.year()}年{value.month() + 1}月
          </span>
          <a></a>
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
