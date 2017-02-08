import React, { Component } from 'react'
import Tree from './apps/Tree'
class ExampleApp extends Component {
  static defualtProps = {
  }
  static propTypes = {
  }
  constructor(props) {
    super(props)
    this.state = {
      value: [],
      data: {
        name: 'Java面向对象',
        childs: [{
          name: '抽象和封装',
          value: '01',
          childs: [{
            name: '设计企鹅类',
            value: '1001',
          }, {
            name: '创建一个带默认构造方法的类',
            value: '1002',
          }, {
            name: '创建一个没有构造器的类',
            value: '1003',
          }],
        }, {
          name: '继承',
          value: '02',
          childs: [{
            name: '类的继承',
            value: '2001',
          }, {
            name: '类的初始化顺序',
            value: '2002',
          }, {
            name: '子类重载父类的方法',
            value: '2003',
          }],
        }, {
          name: '多态',
          value: '03',
          childs: [{
            name: '使用多态（Java面向对象-中等）',
            value: '3001',
          }, {
            name: '多态的技术后期绑定（运行期绑定）',
            value: '3002',
          }],
        }, {
          name: '接口',
          value: '04',
        }],
      },
    }
  }
  onChange = (selectedArr) => {
    console.log(selectedArr)
  }
  render() {
    const {
      data,
    } = this.state
    return (
      <div>
        <Tree
          data={data}
          maxDepth={2}
          onChange={this.onChange}
          expandAll
        />
      </div>
    );
  }
}
export default ExampleApp
