- [ ] 阿里云｜讲讲 fiber

- [ ] 微信｜React原理知道吗    

  - for循环setState 页面会怎么展示？为什么 

  - React是怎么做batch update的吗 讲讲原理 

  - 如果一个frame完成不了计算会怎么办？ 

  - ⇒讲讲事件循环 

  - Fiber Fiber是怎么知道回来要执行的任务？

- [ ] 微信｜React[源码](https://www.nowcoder.com/jump/super-jump/word?word=源码)看过吗

  - 讲了react18的[源码](https://www.nowcoder.com/jump/super-jump/word?word=源码) 正好看了useTransition
  - Fiber的原理，怎么实现的
  - 怎么打断diff计算的
  - Fiber的副作用
  - 讲讲浏览器的渲染流程

- [ ] 美团｜React 讲讲Fiber

- [ ] 微步在线｜react fiber (讲了 state 原理）

- [ ] 游卡｜fiber （怎么都有问fiber呀 烦烦烦）

- [ ] 字节｜react 生命周期 [源码](https://www.nowcoder.com/jump/super-jump/word?word=源码)相关

- [ ] 字节｜react scheduler 调度器如何 polefill requestIdleCallback 这个 api？ (这其实就是利用 requestAnimationFrame 这个 api 来维护浏览器每帧的刷新间隔，然后通过 window.postMessage 来安排合适的任务执行时机。) 

- [ ] 字节｜fiber 的调度过程？（先通过 scheduler 进行异步调度，然后就俩阶段，render 阶段负责调和子节点构建 fiber 树以及 dom 树构建和一些属性的初始化等等等，整体来看是一个递 `perforUnitOfWork` 和归 `completeWork` 的过程；commit 阶段不可打断分三部分 before mutation、mutation、layout分别负责不同的任务。）