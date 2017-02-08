import React, { PropTypes } from 'react'
import _ from 'lodash'
import DateTableRow from './DateTableRow'
export default class DateTable extends React.Component {
  render() {
    const {
      weeks
    } = this.props
    if (_.isEmpty(weeks)) {
      return null
    }
    return (
      <tbody>
        {
          weeks.map((week,index) => (
            <DateTableRow week={week} key={index} />
          ))
        }
      </tbody>
    )
  }
}
