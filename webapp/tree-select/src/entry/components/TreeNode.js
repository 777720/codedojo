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
      target: 'parent'
    }
  }
  componentWillReceiveProps = (nextProps) => {
    if (nextProps.selected === this.state.selected) {
      return
    }
    if (nextProps.target === 'parent') {
      const allCount = nextProps.selected ==='all' ? this.state.length : 0
      this.setState({
        selected: nextProps.selected,
        allCount,
        target: 'parent',
        partCount: 0,
      })
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
  triggerSelected = (selected) => {
    const {
      maxDepth,
      length,
      onChange,
      data,
      depth,
      onParentChange,
    } = this.props
    if (depth === maxDepth) {
      onChange(selected, data.value)
    }else {
      onParentChange(selected,depth,data)
    }
  }
  handleSelected = () => {
    const { triggerParentSelected } = this.props
    const {
      length,
      selected,
    }=this.state
    const nextSelected = selected === 'all' ? 'none' : 'all'
    const count = selected ==='all' ? 0 : length
    this.setState({
      selected: nextSelected,
      target: 'parent',
      allCount: count,
      partCount: 0,
    },() => {
      this.triggerSelected(this.state.selected)
      if (triggerParentSelected) {
        triggerParentSelected(selected,nextSelected)
      }
    })
  }
  triggerParentSelected = (childsSelected, childsNexSelected) => {
    const {
      length,
      allCount,
      partCount,
      selected,
    } = this.state
    let nextAllCount = allCount;
    let nextPartCount = partCount;
    const { triggerParentSelected } = this.props
    if (childsNexSelected === 'all') {
      nextAllCount ++
    }
    if (childsSelected === 'all') {
      nextAllCount --
    }
    if (childsNexSelected === 'part') {
      nextPartCount ++
    }
    if (childsSelected === 'part') {
      nextPartCount --
    }
    let nextSelected = 'none'
    if (nextAllCount === length) {
      nextSelected = 'all'
    }else if(nextAllCount + nextPartCount > 0) {
      nextSelected = 'part'
    }
    this.setState({
      allCount: nextAllCount,
      partCount: nextPartCount,
      selected: nextSelected,
      target: 'self',
    }, () => {
      if (triggerParentSelected) {
        triggerParentSelected(selected, this.state.selected)
      }
    })
  }
  render() {
    const {
      data,
      depth,
      maxDepth,
      onParentChange,
      onChange,
    } = this.props
    const {
      expanded,
      target,
      allCount,
      partCount,
      selected,
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
          <NodeIcon
            selected={selected}
            onClick={this.handleSelected}
          />
        <span onClick={this.handleClick}>{name} {allCount} : {partCount}}</span>
        </div>
        <div style={childsStyle}>
            {
              childs && childs.map((child,index) => (
                <TreeNode
                  data={child}
                  maxDepth={maxDepth}
                  depth={depth+1}
                  key={index}
                  target={target}
                  triggerParentSelected={this.triggerParentSelected}
                  onParentChange={onParentChange}
                  onChange={onChange}
                  selected={selected}

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
