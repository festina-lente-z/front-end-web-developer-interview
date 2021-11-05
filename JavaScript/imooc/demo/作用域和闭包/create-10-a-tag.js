// 创建10个`<a>`标签，点击的时候弹出对应的序号

// for(let i=0;i<10;i++){
//   let newA = document.createElement('a')
//   let newContent = document.createTextNode(i)
//   newA.appendChild(newContent)
//   newA.onclick = function(){
//     alert(i)
//   }
//   let root = document.getElementById('root')
//   root.append(newA)
// }

// let i, a
// for (i = 0; i < 10; i++){
//   a = document.createElement('a')
//   a.innerHTML = i + '<br>'
//   a.addEventListener('click', function (e) {
//     e.preventDefault()
//     alert(i)
//   })
//   document.body.appendChild(a)
//   console.log('x');
// }
// 创建了10个<a>，但是每次click弹出的都是10。原因：因为for循环很快就会执行完，但是被绑定的事件click才会开始执行
// 等到点击的时候，for循环早已执行完，此时全局变量i的值已经是10


// 解决办法
let a
for (let i = 0; i < 10; i++){
  a = document.createElement('a')
  a.innerHTML = i + '<br>'
  a.addEventListener('click', function (e) {
    e.preventDefault()
    alert(i)
  })
  document.body.appendChild(a)
  console.log('x');
}
// 每次click会在for循环的块作用域中找i