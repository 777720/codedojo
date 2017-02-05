import React, { Component, PropTypes } from 'react'
import TreeNode from '../components/TreeNode'
import lodash from 'lodash'
export default class Tree extends Component {
  constructor(props) {
    super(props)
    this.state = {
      valueArr: [],
    }
  }
  static propTypes = {
    data: PropTypes.object.isRequired,
    maxDepth: PropTypes.number,
    onChange: PropTypes.func,
    expandAll: PropTypes.bool,
    rootStyle: PropTypes.object,
    itemStyle: PropTypes.object,
  }
  onParentChange = (selected, depth, data) => {
    const {
      maxDepth,
      onChange,
    } = this.props
    const value = this.getValues(depth, maxDepth, data)

    const {
      valueArr
    } = this.state
    if (selected === 'all') {
      this.setState({
        valueArr: _.union(value,valueArr)
      },() => {
        onChange(this.state.valueArr)
      })
    }
    if (selected === 'none') {
      this.setState({
        valueArr: _.difference(valueArr,value)
      },() => {
        onChange(this.state.valueArr)
      })
    }
  }
  getValues = (depth, maxDepth, data) => {
    if (_.isEmpty(data.childs)) {
      return []
    }
    if (depth === maxDepth-1) {
      return data.childs.map((child) => child.value)
    }
    return _.flattenDeep(data.childs.map((child) => this.getValues(depth+1, maxDepth, child)))
  }
  onChange = (selected, value) => {
    const {
      onChange,
    } = this.props
    const {
      valueArr
    } = this.state
    if (_.indexOf(valueArr,value) > -1) {
      _.remove(valueArr, (v) => v === value)
    }else {
      valueArr.push(value)
    }
    this.setState({
      valueArr,
    },() => {
      onChange(this.state.valueArr)
    })
  }
  render() {
    const {
      data,
      maxDepth,
      onChange,
    } = this.props

    return(
      <div>
        <TreeNode
          data={data}
          maxDepth={maxDepth}
          depth={0}
          onParentChange={this.onParentChange}
          onChange={this.onChange}

        />
      </div>
    )
  }
}
