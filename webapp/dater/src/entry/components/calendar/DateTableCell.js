import React, { PropTypes } from 'react'
import { Wrapper } from 'react-partflux'
import classNames from 'classNames'
class DateTableCell extends React.Component{
  render() {
    const {
      date
    } = this.props
    const {
      type,
      day,
      selected,
    } = date
    return (
      <td>
        <div>
          {day}
        </div>
      </td>
    )
  }
}
export default ({...others}) => (
  <Wrapper>
    <DateTableCell {...others} />
  </Wrapper>
)
