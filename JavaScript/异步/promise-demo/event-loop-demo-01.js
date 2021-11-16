function func1() {
  console.log(1);
}
var p = new Promise(resolve => {
  console.log(4);
  resolve(5);
})
// 传递给 new Promise 的函数被称为 executor。
// 当 new Promise 被创建，executor 会自动运行。

function func2() {
  setTimeout(() => {
    console.log(2);
  })
  func1()
  console.log(3);
  p.then(resolved => {
    console.log(resolved);
  })
  .then(() => {
    console.log(6);
  })
}
func2();
// 输出：4，1，3，5，6，2