import React from 'react'
import CalendarHeader from './CalendarHeader'
import CalendarBody from './CalendarBody'
class Calendar  extends React.Component{
  render() {
    return (
      <div className="calendar">
        <CalendarHeader />
        <CalendarBody />
      </div>
    )
  }
}
export default Calendar
