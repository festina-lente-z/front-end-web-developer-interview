- [ ] shopee｜promise解决了什么问题（回调地狱）

- [ ] shopee｜promise的方法(说了then, catch, 面试官补充了all race（教程 https://www.jianshu.com/p/d8a901dd72ac）

- [ ] shopee｜ES6的promise的异步回调解决了什么问题

- [ ] 小米｜手撕代码promise.race

- [ ] 小米｜什么是promise

- [ ] 阿里｜下述关于Node.js中async/await 的描述正确的是：
  a. await 仅能在 async 函数内部使用，否则会抛出语法错误
  b. 普通函数可以通过 .bind() 绑定作用域，但是 async 函数无法二次绑定作用域
  c. await 关键字可以用在 async 函数上，如果对普通函数使用 await 会抛出异常
  d. 调用 async 函数时本质上返回的是一个 promise，可以进行 .then() .catch() 操作
  e. 在 async 函数中，如果直接返回一个async或promise函数，这个async或promise内的返回值可以被调用函数获取到
  f. 在 async 函数中，可以在 while, for, for/in, for/of 等控制语句中循环执行 await

- [ ] 字节｜u.console('breakfast').setTimeout(3000).console('lunch').setTimeout(3000).console('dinner')，实现这个u

  ```javascript
  class U {
   constructor() {
       this.promise = Promise.resolve();
   }
  
   console(val) {
       this.promise = this.promise.then(() => {
          console.log(val); 
       });
       return this;
   }
  
   setTimeout(wait) {
       this.promise = this.promise.then(() => {
           return new Promise(resolve => {
               setTimeout(() => {
                   resolve()
               }, wait);
           });
       })
       return this;
   }
  }
  const u = new U()
  u.console('breakfast').setTimeout(3000).console('lunch').setTimeout(3000).console('dinner')
  ```

- [ ] 字节｜代码题：使用Promise执行异步操作

- [ ] 百度｜Promise.all和Promise.race

- [ ] 腾讯｜promise有几种状态→状态已经变化了还可以更换吗

- [ ] 字节｜看代码说结果

  ```javascript
  // 看代码说结果
  setTimeout(function() {
  console.log('setTimeout1');
  new Promise(function(resolve) {
  console.log('promise0');
  resolve()
  }).then(function() {
  console.log('settimeout promise resolveed');
  })
  });
  setTimeout(function() {
  console.log('setTimeout2');
  });
  const P = new Promise(function(resolve) {
  console.log('promise');
  for (var i = 0; i < 10000; i++) {
  if(i === 10) {
  console.log('for');
  }
  if (i === 9999) {
  resolve('resolve');
  }
  }
  }).then(function(val) {
  console.log('resolve1');
  }).then(function(val) {
  console.log('resolve2');
  });
  new Promise(function(resolve) {
  console.log('promise2');
  resolve('resolve');
  }).then(function(val) {
  console.log('resolve3');
  })
  console.log('console');
  
  ```

- [ ] 字节｜了解过promise.all吗，会实现吗。实现后追问细节。

- [ ] 字节｜箭头函数+promise输出题。

- [ ] 字节｜编程题：由于当前环境下没有本地实现的加法函数，加法是通过异步 api 实现的，一次只支持两个数字参数，要求实现一个加法函数支持多个参数，要求最快的计算效率。(这道题我优化了三个版本，第三个版本是用了一个结果池，找不到了。）

  ```javascript
  const addRemote = async (a: number, b: number) =>
  new Promise((resolve) => {
      setTimeout(() => resolve(a + b), 1000);
  });
  // version 1.0
  async function add_v1(...inputs: number[]) {
  let handler = Promise.resolve(inputs[0]);
  for (let i = 1; i < inputs.length; i++) {
      handler = handler.then((res) => {
          return addRemote(res, input[i]).then((res) => {
              return res;
          });
      });
  }
  await handler.then((res) => {
      return res;
  });
  }
  // version 2.0
  async function add_v2(...inputs: number[]) {
  if (inputs.length === 1) {
      console.log(inputs[0]);
      return inputs[0];
  }
  let tasks = [];
  let i = 0;
  for (; i < inputs.length; i += 2) {
      tasks.push(addRemote(inputs[i], inputs[i + 1]));
  }
  let handler = Promise.all(tasks);
  let res = await handler.then((res) => {
      return add_v2(...([...res, ...inputs.slice(i + 1)] as number[]));
  });
  return res;
  }
  add_v2(1, 2, 3, 4).then((res) => {
  console.log(res);
  });
  ```

- [ ] 字节｜一道 promise 的题，要求实现一个请求重发器，就是一旦失败就不断的重新请求直到请求超过最大次数限制，每次请求之间有固定的时间间隔，（这道题我一开始题目就读错了，我以为是一个超时与失败的重传器，写的直接裂开。)

- [ ] 字节｜promise 和setTimeOut求输出（考察异步、宏任务、微任务）

- [ ] 荣耀｜给一个promise，其既定流程为resolve，如何使其返回reject（封装

- [ ] 深信服｜宏任务微任务的题目

  ```javascript
  setTimeout(()=>{
      console.log("1")
      Promise.resolve().then(()=>{
          console.log("2")
      })
  })
  console.log("3")
  Promise.resolve().then(()=>{
      console.log("4")
      setTimeout(()=>{
          console.log("5")
      })
  })
  //输出：34125
  ```

- [ ] 拼多多｜使用promise，实现一个sleep函数？

- [ ] 字节｜手写Promise.all

- [ ] 百度｜什么是promise？实现一个简单的promise？

- [ ] 百度｜手写promise，能实现异步就行

- [ ] 网易｜十个promise封装，怎么判断第一个→怎么判断第一个成功的（各种方法都可以，主要看思维）

- [ ] 欢聚｜promise底层如何实现微任务

- [ ] 小米｜promise 链式调用说打印顺序

- [ ] 小红书｜手写题：Promise.all

- [ ] bilibili｜事件循环，宏任务、微任务的概念

- [ ] bilibili｜Promise 用过吗？能实现 Promise.finally ？ 或者Promise.all ? 

- [ ] ```javascript
  实现promise.all
  
  追加
  p = Promise.resolve();
  p.then(() => {
      console.log('res1')
  })
  p.then(() => {
      console.log('res2')
  })
  
  
  // code 2
  p = Promise.reject();
  p.catch(() => {
      console.log('rej1')
  })
  p.catch(() => {
      console.log('rej2')
  })
  
  // code 3 
  p = new Promise((res, rej) => {
      console.log(2);
      res();
      console.log(3);
  })
  console.log(1);
  ```

- [ ] 转转｜promise 与 async/await的区别

- [ ] 转转｜异步处理的方式

