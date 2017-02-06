import React from 'react'
import { Wrapper } from 'react-partflux'
 class Footer extends React.Component {
   constructor(props) {
     super(props)
   }
   render() {
     return(
       <div>
        <span>
          <a>OK</a>
        </span>
       </div>
     )
   }
 }
 export default () => (
   <Wrapper>
    <Footer />
   </Wrapper>
 )
