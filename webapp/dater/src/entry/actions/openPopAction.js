import _C from './Constant'
export default function openPopAction() {
  this.store.dispatch({
    type: _C.OPENPOP,
    open: true,
  })
}
