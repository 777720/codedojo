import React, { PropTypes } from 'react'
import { Wrapper } from 'react-partflux'
import classNames from 'classNames'
import selectValueAction from '../../actions/selectValueAction'
class DateTableCell extends React.Component{
  static propTypes = {
  };
  static propTypes = {
  };
  selectValue = (day, type) => {
    const { value } = this.props
    const cloned = value.clone()
    if (type === 'last') {
      cloned.substract(1, 'month')
    }
    if (type === 'next' ) {
      cloned.add(1, 'month')
    }
    console.log('cell onClick');
    this.props.selectValueAction(cloned.year(), cloned.month(), day)

  }
  render() {
    const {
      date
    } = this.props
    const {
      type,
      day,
      selected,
    } = date
    const classNamesArr = [
      'calendar-cell',
      {
        'calendar-last-month-cell': type === 'last',
        'calendar-select-date': selected && type === 'cur',
        'calendar-next-month-cell': type === 'next',
      },
    ]
    const classes = classNames(classNamesArr)
    return (
      <td>
        <div
          onClick={() => { this.selectValue(day, type) }}
          className="calendar-date"
        >
          {day}
        </div>
      </td>
    )
  }
}
const actions = {
  selectValueAction,
}
const propsFn = ({ value }) => ({ value })
export default ({...others}) => (
  <Wrapper propsFn={propsFn} actions={actions}>
    <DateTableCell {...others} />
  </Wrapper>
)
