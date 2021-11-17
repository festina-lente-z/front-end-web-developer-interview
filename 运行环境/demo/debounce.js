const input1 = document.getElementById('input1')
// let timer = null
// input1.addEventListener('keyup', function () {
//   if (timer) {
//     // 如果timer有值的话，则给它清空
//     clearTimeout(timer)
//   }
//   timer = setTimeout(() => {
//     console.log(input1.value); // 模拟触发change事件
//     // 清空定时器
//     timer = null
//   }, 500)
  
// })

// 防抖
// debounce是对函数的一个封装，它最后返回的应该是一个函数
function debounce(fn, delay = 500) {
  // timer是在闭包中的
  let timer = null
  return function () {
    if(timer) {
      clearTimeout(timer)
    }
    timer = setTimerout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
}