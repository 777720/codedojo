import React, { PropTypes } from 'react'
import { Wrapper } from 'react-partflux'
import Calendar from './calendar/Calendar'
class Body extends React.Component {
  static defaultProps = {

  }
  static propTypes = {
    showTime: PropTypes.bool,
  }
  constructor(props) {
    super(props)
  }
  render() {
    const { showTime } = this.props
    return(
      <div style={{ display: '-webkit-inline-box' }}>
        <Calendar />
      </div>
    )
  }
}
const propsFn = (state, global) => ({ showTime: global.showTime })
export default () => (
  <Wrapper propsFn={propsFn}>
    <Body />
  </Wrapper>
)
