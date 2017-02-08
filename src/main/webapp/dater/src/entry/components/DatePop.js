import React, { PropTypes } from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import PopOver from 'react-waenui-popover'

const anchorOrigin = {
  horizontal: 'left',
  vertical: 'top',
}
const rootStyle = {
  backgroundColor: '#fff',
}
export default class DatePop extends React.Component {
  constructor(props) {
    super(props)
  }
  onRequestClose = () => {
    const {
      onRequestClose
    }=this.props
    if (onRequestClose) {
      onRequestClose()
    }
  }
  render() {
    const {
      open,
      anchorEl,
    } =this.props
    return(
      <PopOver
        open={open}
        animationType="vertical"
        anchorEl={anchorEl}
        rootStyle={rootStyle}
        onRequestClose={this.onRequestClose}
        anchorOrigin={anchorOrigin}
      >
        <div>
          11111
          <Header />
          <Body />
          <Footer />
        </div>
      </PopOver>
    )
  }
}
