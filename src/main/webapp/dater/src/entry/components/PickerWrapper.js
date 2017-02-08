import React from 'react'
import { Wrapper } from 'react-partflux'
import Picker from './Picker'
import openPopAction from '../actions/openPopAction'
const propsFn = (state, global) => {
  const {
    value
  } = state
  const {
    format
  } = global
  const valueStr = value.format(format)
  return {
    valueStr,
  }
}
const actions = {
  onClick: openPopAction,
}
export default () => (
  <Wrapper propsFn={propsFn} actions={actions}>
    <Picker />
  </Wrapper>
)
