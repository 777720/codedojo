import React,{ PropTypes } from 'react'
import moment from 'moment'
import { Wrapper } from 'react-partflux'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        <input
          type="text"
        />
      </div>
    )
  }
}
export default () => (
  <Wrapper>
    <Header />
  </Wrapper>
)
