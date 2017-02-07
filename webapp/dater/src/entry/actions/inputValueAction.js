import _C from './Constant'
export default function inputValueAction(value){
  this.store.dispatch({
    type: _C.INPUTVALUE,
    value
  })
}
