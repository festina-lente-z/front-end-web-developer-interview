var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {
    container.innerHTML = count++;
    console.log(e)
    console.log(this)
};

// 第一版
// 传入两个参数，一个是要防抖的函数，一个是延迟时间
// const debounce = (func, n) => {
//   let timer
//   return () => {
//     clearTimeout(timer)
//     timer = setTimeout(func, n)
//   }
// }

// 第二版：修正this指向
// const debounce = (func, n) => {
//   let timer
//   return function(){
//     let context = this
//     clearTimeout(timer)
//     timer = setTimeout(() => {
//       func.apply(this)
//     }, n)
//   }
// }

// 第三版：修正event对象（传入参数）
const debounce = (func, n) => {
  let timer_id
  return function(){
    let arg = arguments
    clearTimeout(timer_id)
    timer_id = setTimeout(() => {
      func.apply(this, arg)
    }, n)
  }
}

// 第四版：立刻执行
// 需求是：不希望非要等到事件停止触发后才执行，希望立即执行函数，然后等到停止触发n秒后，才可以触发执行


// container.onmousemove = getUserAction;
container.onmousemove = debounce(getUserAction, 1000);