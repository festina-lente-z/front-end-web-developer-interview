const input1 = document.getElementById('input1')
let timer = null
input1.addEventListener('keyup', function () {
  if (timer) {
    // 如果timer有值的话，则给它清空
    clearTimeout(timer)
  }
  timer = setTimeout(() => {
    console.log(input1.value); // 模拟触发change事件
    // 清空定时器
    timer = null
  }, 500)
  
})