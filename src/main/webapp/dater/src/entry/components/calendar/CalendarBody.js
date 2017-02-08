import React, { PropTypes } from 'react'
import { Wrapper } from 'react-partflux'
import DateTable from './DateTable'
class CalendarBody extends React.Component {
  static defaultProps = {

  }
  static propsTypes = {

  }
  renderBody = () => {
    const { value } = this.props
    const now = value.clone()
    const last = value.clone().subtract(1,'month')
    const lastDays = last.endOf('month').date()
    const startWeekday = now.startOf('month').date()
    const monthDays = now.endOf('month').date()
    const today = value.date()
    const weeks = [[]]
    let weekIndex = 0;
    let curWeekday = 0;

    for (let i = 1; i <= monthDays; i++ ) {
      //生成生一个月的
      if (weekIndex === 0&& startWeekday > curWeekday) {
        weeks[weekIndex][curWeekday++] = {
          day: lastDays - startWeekday + curWeekday,
          type: 'last',
          selected: false,
        }
        i--;
      } else {
        //生成当前的 
        weeks[weekIndex][curWeekday++] = {
          day: i,
          type: 'cur',
          selected: i === today,
        }
      }
      //进行到下一个星期
      if (curWeekday === 7) {
        curWeekday = 0
        weeks[++weekIndex] = []
      }
    }
    //生成下一个月的
    if (curWeekday !== 0) {
      let i = 1;
      for (;curWeekday < 7;) {
        weeks[weekIndex][curWeekday++] = {
          day: i++,
          type: 'next',
          selected: false,
        }
      }
    }
    return (
      <DateTable weeks={weeks} />
    )

  }
  renderHeader = () =>
    <tr>
      <th>日</th>
      <th>一</th>
      <th>二</th>
      <th>三</th>
      <th>四</th>
      <th>五</th>
      <th>六</th>
    </tr>

  render() {
    return(
      <div>
        <table>
          <thead>
            {
              this.renderHeader()
            }
          </thead>
            {
              this.renderBody()
            }
        </table>
      </div>
    );
  }
}
const propsFn = ({ value }) => ({ value })
export default () => (
  <Wrapper propsFn={propsFn}>
    <CalendarBody />
  </Wrapper>
)
