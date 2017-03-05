import _C from '../actions/Constant'
import _ from 'lodash'
import moment from 'moment'
const _reducer = {
  [_C.INPUTVALUE]:(value,action) => moment(action.value),
  [_C.ADDYEAR]: (value, action) => moment(value.add(action.year, 'year')),
  [_C.SUBYEAR]: (value, action) => moment(value.subtract(action.year, 'year')),
  [_C.ADDMONTH]: (value, action) => moment(value.add(action.month, 'month')),
  [_C.SUBMONTH]: (value, action) => moment(value.subtract(action.month, 'month')),
  [_C.SELECTVALUE]: (value, action) => moment(value.year(action.year).month(action.month).date(action.day)),
}

export default function valueReducer(value = moment(), action) {
  if (_.has(_reducer, action.type)) {
    return _reducer[action.type](value,action)
  }
  return value
}
