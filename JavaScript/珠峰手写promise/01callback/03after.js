// after 在...之后

// debounce函数就是这个原理
// 这个函数的执行上下文没有被销毁，形成闭包
function after(times, callback) { //闭包
  //AO = {times: 3} 闭包
  return function () {
    if(--times === 0) {
      callback()
    }
  }
}

// after里面的函数是真正的执行函数
// fn执行n次才会执行really
let fn = after(3, function(){
  console.log('really')
})
fn()
fn()