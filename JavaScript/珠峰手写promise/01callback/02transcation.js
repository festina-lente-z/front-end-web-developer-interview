// react setState 事务 在函数执行之前干一些事，在执行之后又干一些事，可以等同于before/after

function perform(anyMethod, wrappers) {
  wrappers.forEach(wrapper => wrapper.initialize())
  anyMethod()
  wrappers.forEach(wrapper => wrapper.close())
}

// 希望在say之前增加一些功能，在say之后也增加一些功能
perform(function () {
  console.log('say')
}, [{
  initialize() {
    console.log('wrapper1 beforeSay')
  },
  close() {
    console.log('wrapper1 close')
  }
},{
  initialize() {
    console.log('wrapper2 beforeSay')
  },
  close() {
    console.log('wrapper2 close')
  }
}])