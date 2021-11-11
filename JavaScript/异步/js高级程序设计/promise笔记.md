# Promise
Promise是对尚不存在结果的一个替身。
promise是一种异步程序执行的机制。
## Promise/A+规范
Promise/A+规范是ES6规范实现的范本，ES6增加了对Promise/A+规范的完善支持，即Promise类型。
## Promise基础
```javascript
let p = new Promise(() => {});
setTimeout(console.log, 0, p);//Promise {<pending>}
```
- Promise是ES6新增的引用类型，可以用`new`操作符来实例化。
- 创建新的Promise需要传入`executor`函数作为参数。

### Promise状态机
Promise是一个有状态的对象，分别为：
- `pending`（待定）
- `fulfilled`（兑现，有时也称”解决“，`resolved`）
- `rejected`（拒绝）
`pending`是Promise的最初是状态。
在`pending`状态下，Promise可以`settled`为代表成功的`fulfilled`，或者`settled`为代表失败的`rejected`。
无论`settled`为哪种状态都是**不可逆**的。

Promise的状态是私有的，不能直接通过JavaScript检测到。
这主要是为了避免根据读取到的Promise状态，以同步方式处理Promise对象。
Promise的状态也不能被外部JavaScript修改。
Promise故意将异步行为封装起来，从而隔离外部的同步代码。

### 解决值、拒绝理由及Promise用例
Promise主要有两大用途：
- 抽象地表示一个异步操作。
- Promise封装的异步操作会实际生成某个值，而程序期待Promise状态改变时可以访问这个值。如果Promise被拒绝，程序就会期待Promise状态改变时可以拿到拒绝的理由。
### 通过执行函数控制Promise状态
由于Promise的状态是私有的，所以只能在内部进行操作。内部操作在Promise的`executor`函数中完成。
`executor`函数主要有两项职责：
- 初始化Promise的异步行为
- 控制状态的最终转换（通过调用`executor`函数的两个函数参数实现，resolve()和reject()）、
```javascript
let p1 = new Promise((resolve, reject) => resolve());
setTimeout(console.log, 0, p1);//Promise {<fulfilled>: undefined}
let p2 = new Promise((resolve, reject) => reject());
setTimeout(console.log, 0, p2);//Promise {<rejected>: undefined}
```
`executor`函数是同步执行的。

