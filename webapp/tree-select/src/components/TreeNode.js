import React, { Component,PropTypes } from 'react'
import NodeIcon from './NodeIcon'
export default class TreeNode extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {
      data,
      depth,
      maxDepth,
    } = this.props
    console.log(data);
    const {
      name,
      childs
    } = data
    const styles = {
      paddingLeft: `${depth * 15}px`,
    }
    return(
      <div>
      11111111
      </div>
    )
  }
}
TreeNode.propTypes = {
  maxDepth: PropTypes.number,
  depth: PropTypes.number,
  data: PropTypes.object,
}
