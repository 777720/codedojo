import React, { Component,PropTypes } from 'react'
import NodeIcon from './NodeIcon'
export default class TreeNode extends Component {
  constructor(props) {
    super(props)
    this.state={
      expanded:false,
      selected: props.selected ? props.selected : 'none',
      length: props.data.childs ? props.data.childs.length : 0,
      allCount: 0,
      partCount: 0,
    }
  }
  handleClick = () => {
    const {
      expanded
    } = this.state
    this.setState({
      expanded: !expanded
    })
  }
  render() {
    const {
      data,
      depth,
      maxDepth,
    } = this.props
    const {
      expanded,
    } = this.state
    const {
      name,
      childs,
    } = data
    const styles = {
      paddingLeft: `${depth * 15}px`,
    }
    const childsStyle = {
      display: expanded ? 'block' : 'none',
    }
    return(
      <div>
        <div style={styles}>
          <NodeIcon />
          <span onClick={this.handleClick}>{name}</span>
        </div>
        <div style={childsStyle}>
            {
              childs && childs.map((child,index) => (
                <TreeNode
                  data={child}
                  maxDepth={maxDepth}
                  depth={depth+1}
                  key={index}
                />
              ))
            }
        </div>
      </div>
    )
  }
}
TreeNode.propTypes = {
  maxDepth: PropTypes.number,
  depth: PropTypes.number,
  data: PropTypes.object,
}
