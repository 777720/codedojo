import React, { PropTypes } from 'react'
import DateTableCell from './DateTableCell'

export default class DateTableRow extends React.PureComponent {
  render() {
    const {
      week,
    }=this.props
    return (
      <tr>
        {
          week.map((date, index) =>
            <DateTableCell key={index} date={date} />
          )
        }
      </tr>
    )
  }
}
DateTableRow.propTypes = {
  week: PropTypes.array,
}
