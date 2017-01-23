这是一个选择树，使用react开发

用法：

```
<SelectTree
    data={data}
    onChange={}
    expandAll={false}
    rootStyle={}
    itemStyle={}
    maxDepth={}
/>
```

属性 | 默认值 | 用途
---|---| ---
data | {} | 初始值
expandAll | false | 一开始是否全部展开
rootStyle | {} | 根节点样式
itemStyle | {} | 根节点样式
maxDepth | {} | 最深的节点深度，有这个值的时候，非最深且不是子节点的不会被选中，且回调函数里arr只存最深的节点值
onChange | ()=>{} | 回调方法（data,arr)data表示数据，arr表示选中的value数组
