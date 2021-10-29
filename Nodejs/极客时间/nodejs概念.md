## 什么是Node.js?
### 官网概念
- Node.js是一个基于Chrome V8引擎的JavaScript运行环境
- Node.js使用了一个事件驱动、非阻塞式I/O的模型，使其轻量又高效

### Node.js里运行的JavaScript跟在Chrome里运行的JavaScript有什么不同？
- Chrome浏览器用的是同样的JavaScript引擎和模型
- 结论：在Node.js里写JS和在Chrome里写JS，几乎没有不一样
  - Node.js没有浏览器API，即document,window等
  - Node.js增加了许多Node.js API，如文件系统，进程等

### 对于开发者来说，Node.js
- 在Chrome里写JavaScript控制浏览器
- Node.js让你用类似的方式，控制整个计算机

## BFF(Backend for Frontend)层
### BFF主要职责
- 对用户侧提供HTTP服务
- 使用后端RPC服务
