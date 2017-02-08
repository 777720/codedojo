import React from 'react'
import { Wrapper } from 'react-partflux'
import Picker from './PickerWrapper'
import DatePop from './DatePopWrapper'
class Main extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        <Picker />
        <DatePop />
      </div>
    )
  }
}
export default () => (
  <Wrapper>
    <Main />
  </Wrapper>
)
