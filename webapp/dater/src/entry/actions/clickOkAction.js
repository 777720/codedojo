import _C from './Constant'
export default function clickOkAction() {
  this.store.dispatch({
    type: _C.CLICKOK,
  })
}
