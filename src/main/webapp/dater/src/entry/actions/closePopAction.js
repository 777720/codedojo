import _C from './Constant'
export default function closePopAction() {
  this.store.dispatch({
    type: _C.CLOSEPOP,
    open: false,
  })
}
