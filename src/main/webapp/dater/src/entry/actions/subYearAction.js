import _C from './Constant'
export default function subYearAction(year) {
  this.store.dispatch({
    type: SUBYEAR,
    year,
  })
}
