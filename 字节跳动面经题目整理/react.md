- [ ] 怎样实现useEffect第一次render不触发，在第二次触发，或者在给定次数触发（自定义hook useRef）
- [ ] useEffect中执行的函数依赖于某个参数，但没有写进依赖数组中，如何得到最新的状态？提示：useRef
- [ ] 你录制的视频是关于什么的？讲一下useState和useRef？useState它是怎么实现的？setState函数是怎么实现状态更改的
- [ ] 问一个react hook题目， 假如有一个这样的组件：
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
现已知上述代码不安全， 如果第 5 行执行时间过长， 在第 5 行阻塞时， 页面被用户手动关闭了， 再执行第 6 行时会报 warning， 请问如何改造代码， 使setCount变得安全？
答： 用 useRef 记录组件的生存状态， 在 useEffect 当中写 return 函数， 组件卸载时将 useRef 记录的状态转为 false
- [ ] useRef可以存放那些值，为什么要用current获取
- [ ] 如果我有多个tab，想要在第一次切换时请求对应数据，之后切换时不重复请求，应该怎么做？(现在想想，或许可以用useRef缓存已经active的ID，然后在useEffect的回调函数里判断是否当前activeID已存在，如果存在就不重复请求数据？)
- [ ] useRef有用过吗？用在哪些场景下？
- [ ] componentWillReceiveProps用到了this，getDriverStateFromProps也要用，怎么办【伪代码】
把this.xxx存到state里面，第二个参数是state，里面有xxx（有点挫，懂的人应该都有同样的感受吧，如果是函数组件，一个useRef保存一下即可）。另外的方法，如果和内部变量无关，把它抠到class组件外面去
- [ ] useRef, 还有useImperativeHandle与forwardRef
- [ ] 说一下react hooks，useRef使用场景，useMemo和useEffect区别(依赖发生变化才会触发，没觉得有区别，说下不同的使用场景)
- [ ] useRef 还有个不常用的ref钩子也问了下
- [ ] 说一下react hooks，useRef使用场景，useMemo和useEffect区别(依赖发生变化才会触发，没觉得有区别，说下不同的使用场景)