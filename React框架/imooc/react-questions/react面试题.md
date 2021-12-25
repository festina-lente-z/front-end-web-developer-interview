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

## React 和 Vue 的区别
相同点
- 都支持组件化
- 都是数据驱动视图
- 都使用vdom操作DOM
不同点
- react使用JSX拥抱JS，vue使用模板拥抱html
- react函数式编程，vue声明式编程
- react更多需要自力更生，vue把想要的都给你
- vue双向数据流，react单向数据流
- react中，当某组件的状态发生改变时，它会以该组件为根，重新渲染整个组件子树。而在vue中，组建的依赖是在渲染的过程中自动追踪的，所以系统能准确知晓哪个组件确实需要被重新渲染。

## react常见性能优化方式
## react组件间通信(每个加上例子可以整理一篇文章)
- 父->子通信：传入props
- 子->父通信：父组件向子组件传一个函数，然后通过这个函数的回调，拿到子组件传过来的值
- 利用context全局传值`React.createContext()`
- 用一些全局机制实现，比如redux
- 发布订阅模式，eventBus[event bus in React?](https://stackoverflow.com/questions/53329773/event-bus-in-react)
