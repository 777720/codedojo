import _C from './Constant'
export default function addYearAction(year) {
  this.store.dispatch({
    type: _C.ADDYEAR,
    year,
  })
}
