import React, { PureComponent, PropTypes } from 'react'
import ReactDOM from 'react-dom'
export default class Picker extends PureComponent {
  static defaultProps = {

  }
  static propTypes = {

  }
  constructor(props) {
    super(props)
  }
  setAnchor = (anchor) => {
    const anchorEl = ReactDOM.findDOMNode(anchor)
    this.context.store.setGlobal({
      anchorEl,
    })
  }
  onClick = () => {
    const { onClick } = this.props
    console.log(`onClick~~~~`);
    if (onClick) {
      console.log(onClick);
      onClick()
    }
  }
  render() {
    return(
      <div>
        <span>
          <input
            type="text"
            readOnly
            value={this.props.valueStr}
            onClick={this.onClick}
            value={this.props.valueStr}
          />
        </span>
      </div>
    )
  }
}
