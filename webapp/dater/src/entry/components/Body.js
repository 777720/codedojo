import React, { PropTypes } from 'react'
import { Wrapper } from 'react-partflux'
class Body extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        Calendar
      </div>
    )
  }
}
export default () => (
  <Wrapper>
    <Body />
  </Wrapper>
)
