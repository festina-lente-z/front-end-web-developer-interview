function loadScript(src, callback) {
  let script = document.createElement('script')
  script.src = src
  script.onload = () => callback(script)
  document.head.append(script)
}
// 现在，如果我们想调用该脚本中的新函数，我们应该将其写在回调函数中
loadScript('./promise-demo/helloworld.js')

alert('loadScript') // 先执行，因为脚本是异步调用的，alert虽然在loadScript后面，但是它不会等到脚本加载完