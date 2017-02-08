import _C from '../actions/Constant'
import _ from 'lodash'
import moment from 'moment'
const _reducer = {
  [_C.INPUTVALUE]:(value,action) => moment(action.value),
}

export default function valueReducer(value = moment(), action) {
  if (_.has(_reducer, action.type)) {
    return _reducer[action.type](value,action)
  }
  return value
}
