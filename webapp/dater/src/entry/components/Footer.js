import React from 'react'
import { Wrapper } from 'react-partflux'
import clickOkActionFn from '../actions/clickOkAction'
 class Footer extends React.Component {
   static defaultProp = {

   }
   static propTypes = {

   }
   constructor(props) {
     super(props)
   }
   render() {
     const {
       showOk,
       clickOkAction,
     } = this.props
     return(
       <div>
        <span>
          <a onClick={clickOkAction}>OK</a>
        </span>
       </div>
     )
   }
 }
 const propsFn = (state,global) => {
   return global.showOk
 }
 const actions = {
   clickOkAction: clickOkActionFn,
 }
 export default () => (
   <Wrapper propsFn={propsFn} actions={actions}>
    <Footer />
   </Wrapper>
 )
