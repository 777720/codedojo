import _C from '../actions/Constant'
export default function openReducer(open = false, action) {
  if (action.type === _C.OPENPOP) {
    return action.open
  }
  if (action.type === _C.CLOSEPOP) {
    return action.open
  }
  return open
}
