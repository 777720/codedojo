import React from 'react'
import { Wrapper } from 'react-partflux'
import DatePop from './DatePop'
import closePopAction from '../actions/closePopAction'
const propsFn = (state, global) => ({
  open: state.open,
  anchorEl: global.anchorEl,
})
const actions = {
  onRequestClose: closePopAction,
}
export default () => (
  <Wrapper propsFn={propsFn} actions={actions}>
    <DatePop />
  </Wrapper>
)
