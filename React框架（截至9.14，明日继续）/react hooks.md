- [ ] 阿里云｜react hooks 在使用时有哪些常见的坑

- [ ] 字节｜React useCallback 什么作用（memorize函数，重新渲染时不会重新定义，但会重新运行。我之前的理解是错的，以为是 useMemo 的函数版）

- [ ] 字节｜react hooks

- [ ] 字节｜看结果

  ```javascript
  function Index(){
      const [ num ,setNumber ] = React.useState(0)
      const handerClick=()=>{
          for(let i=0; i<5;i++ ){
             setTimeout(() => {
                  setNumber(num+1)
                  console.log(num)
             }, 1000)
          }
      }
      return <button onClick={ handerClick } >{ num }</button>
  }
  ```

- [ ] 字节｜useMemo和useCallback的区别，以及用法

- [ ] 字节｜问一个`react hook`题目， 假如有一个这样的组件：

  ```javascript
  const Demo: FC = () => {
   const [count, setCount] = useState(0);
   // 组件初始化时执行该函数， 向后端请求 count 的初始值
   const init = async () => {
       const value = await getCount(); // 向后端发出请求获取初始数据
       setCount(value); // 不安全
   }
  
   useEffect(() => {
       init();
   });
  
   // return ...;
  }
  ```

  现已知上述代码不安全， 如果第 5 行执行时间过长， 在第 5 行阻塞时， 页面被用户手动关闭了， 再执行第 6 行时会报 warning， 请问如何改造代码， 使`setCount`变得安全？
  答： 用 useRef 记录组件的生存状态， 在 useEffect 当中写 return 函数， 组件卸载时将 useRef 记录的状态转为 false

- [ ] 北森｜对hooks的了解

- [ ] 北森｜介绍一下useEffect

- [ ] 4399｜React的hooks比class写法优势在哪？

- [ ] 小红书｜react hook的原理，及对比类组件有什么好处？react自定义hook如何使用生命周期函数？

- [ ] 小红书｜useState是怎么实现的？（就记得是某hook的语法糖，但忘记具体哪个hook了，该死。。。。），它的返回值是什么？

- [ ] 微步在线｜react Hooks （用到了哪写hooks）

- [ ] 游卡｜为什么会诞生hooks class 不是挺好用的吗？ （我认为是函数式编程）

- [ ] 游卡｜useCallback 和 useMemo 区别

- [ ] 游卡｜useReduce （没有用过...）

- [ ] 顺丰｜react hook的优点（常问）

- [ ] 顺丰｜react的useState的原理

- [ ] 转转｜讲一下`useEffect`

- [ ] 绿盟｜hooks讲一讲

- [ ] 字节｜简单讲讲对 hooks 的理解

- [ ] 字节｜Hooks 如何模拟类组件生命周期

- [ ] 字节｜实现 useMemo

- [ ] 字节｜实现 useScroll

- [ ] 字节｜hook 的实现原理？ (我说 hook 类似细粒度的 fiber，解释了一下几个 api 的主要实现，提了一下 useLayoutEffect 和 useEffect 的执行时机的差异等等，然后重点说了 hook 的意义。)