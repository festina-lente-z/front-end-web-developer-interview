## JSX基本使用

## JSX如何判断条件和渲染列表
### 条件判断
- if else
- 三元表达式
- 逻辑运算符 && ||

## 事件
- bind this
- 关于event参数
- 传递自定义参数

## 虚拟DOM
### 虚拟DOM（Virtual DOM）和 diff
- vdom 是实现 vue 和 react 的重要基石
- diff 算法是 vdom 中最核心、最关键的部分
### 背景
- DOM操作非常耗费性能
- 以前用jQuery，可以自行控制DOM操作的时机，手动调整
- vue和react都是数据驱动视图，如何有效控制DOM操作？
- 解决方案——vdom

### vdom
- 有了一定复杂度，想减少计算次数比较难
- 能不能把计算，更多的转移为js计算？因为js执行速度很快
- vdom用js模拟DOM结构，计算出最小的变更，操作DOM                                                                                                                                                                                                                                                                                                                                                                       