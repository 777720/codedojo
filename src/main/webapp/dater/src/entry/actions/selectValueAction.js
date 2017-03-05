import _C from './Constant'
export default function selectValueAction(year, month, day) {
  this.store.dispatch({
    type: _C.SELECTVALUE,
    day,
    year,
    month,
  })
}
