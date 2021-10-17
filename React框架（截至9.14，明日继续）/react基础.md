## JSX语法转换

> react JSX 语法转换 （JSX => React.createElement => 虚拟Dom对象 => 真实DOM）

参考：https://pomb.us/build-your-own-react/

## 牛客网面经

- [ ] 字节｜React 里组件间怎么通信的（集中式，消息发布-订阅，父子单向流通）

- [ ] 字节｜React.createElement(name, props, children)（JSX转换）

  JSON 数据渲染为DOM，函数格式为

  ```javascript
  function tree(props){
      return DOMLElement
  }
  ```

  可以使用 React.createElement(name, props, children)。不需要运行，主要看思路。可以一行写完

  ```javascript
  function tree(props){
    return React.createElement(props.name, props.props, props.children.map( child => tree()))
  }
  ```

  https://www.nowcoder.com/discuss/762363?type=post&order=create&pos=&page=0&ncTraceId=&channel=-1&source_id=search_post_nctrack

- [ ] 小米｜react和原生的区别

- [ ] 小米｜diff算法原理

- [ ] 小米｜为什么 key值改变 就会重新渲染 diff算法是如何识别key值得

- [ ] 字节｜React 的异步加载和懒引入原理

- [ ] 北森｜react的生命周期，具体说一下生命周期的过程

- [ ] 北森｜react新增的几个生命周期

- [ ] 北森｜介绍一下setState

- [ ] 北森｜setState怎样才是同步的：isBatchingUpdates属性设为false则是同步；异步： 在 React 可以控制的地方，就为 true，比如在 React 生命周期事件和合成事件中，都会走合并操作，延迟更新的策略。同步： 在 React 无法控制的地方，比如原生事件，具体就是在 addEventListener 、setTimeout、setInterval 等事件中，就只能同步更新。

- [ ] 4399｜React中如何实现生命周期？

- [ ] 4399｜React中如何实现拦截器

- [ ] 小红书｜react的生命周期（忘记了 getDerivedStateFromProps 。。。。），发送请求是哪个函数？

- [ ] 小红书｜react的性能优化？（面试官不太满意）

- [ ] 小红书｜虚拟dom（简单讲了一下diff[算法](https://www.nowcoder.com/jump/super-jump/word?word=算法)，没答好），key的用途？

- [ ] 小红书｜react的共享全局数据如何实现的？

- [ ] 阿里｜React 18 Suspense在SSR的作用

- [ ] 美团｜讲讲diff算法

- [ ] 美团｜React是怎么渲染的

- [x] 微步在线｜react JSX 语法转换 （JSX => React.createElement => 虚拟Dom对象 => 真实DOM）

- [ ] 微步在线｜react stack React 16 前的底层架构

- [ ] 游卡｜react 用哪个版本

- [ ] 游卡｜自己封装组件如何做 （ 高阶组件吗...hhh）

- [ ] 阿里｜为什么要用Virtul Dom

- [ ] 阿里｜Virtual Dom的效率一定比直接操作Dom高吗

- [ ] 阿里｜你说Virtual Dom减少不必要的Dom操作，让你来设计如何实现这个效果

- [ ] 新奥｜React中unicode和 ？？（没听到）的差别，以及unicode的字符转换

- [ ] 新奥｜setState的同步异步情况，为什么在setTimeOut中就是同步立即触发的。同样都是调用setState是如何区分的。（我说了在react生命周期和合成事件中是是异步，在setTime setInterval中是同步的。原因是会通过isbatchingupdate判断进入队列还是立即更新。面试官说再想一下怎么判断是立即更新还是批量更新）

- [ ] 新奥｜react的错误边界

- [ ] 新奥｜react的项目的整体的优化。（我说了1.渲染列表的key值2.memo，PureComponent, shouldComponentUpdate 缓存3.多个State合并4.组件的逻辑复用抽离5.资源包使用CDN引入6.使用文档碎片7.打包优化等等。面试官说你说的这些是代码优化再想想[项目]()优化）

- [ ] AfterShip｜一道场景题：有一个组件，传入 props，当 props 发生改变的时候，执行一个函数 。我说使用在生命周期函数 componentDidUpdate 的时候触发。面试官问，在 react hook 中怎么实现。我的回答是将 props 作为 useCallback 的依赖项，面试官说不对。后来他说一种最简单的方法是将 props 使用 state 存起来，之后再 useEffect 的时候，比较后面传入的 props，进行触发。

- [ ] 字节｜React解决了什么问题

- [ ] 字节｜react事件绑定的方式以及其区别

- [ ] 顺丰｜react合成事件的优点，事件绑定在哪里

- [ ] 顺丰｜react组件间通信的方式

- [ ] 顺丰｜react单向数据流的理解

- [ ] 顺丰｜react的diff算法

- [ ] 绿盟｜react state怎么修改

- [ ] 绿盟｜组件间通信 怎么修改子组件的props

- [ ] 字节｜实现react render函数

  ```javascript
  function render( vnode, container ) {
  // 当vnode为字符串时，渲染结果是一段文本
  if ( typeof vnode === 'string' ) {
  const textNode = document.createTextNode( vnode );
  return container.appendChild( textNode );
  }
  const dom = document.createElement( vnode.tag );
  if ( vnode.attrs ) {
  Object.keys( vnode.attrs ).forEach( key => {
  if ( key === 'className' ) key = 'class';            // 当属性名为className时，改回class
  dom.setAttribute( key, vnode.attrs[ key ] )
  } );
  }
  vnode.children.forEach( child => render( child, dom ) );    // 递归渲染子节点
  return container.appendChild( dom );    // 将渲染结果挂载到真正的DOM上
  }
  babel 转义后代码什么样子
  ```

- [ ] 字节｜react15 16 差异 生命周期的变化以及为什么会变？react fiber

- [ ] 字节｜合成事件机制？（回答了事件委托以及 react 是如何模拟事件冒泡以及事件捕获的。）

- [ ] 字节｜react组件间通信

- [ ] 字节｜react key 有了解吗

- [ ] 字节｜react为什么要用setState()

- [ ] 字节｜react ref用法

- [ ] 百度｜react事件绑定原理？

