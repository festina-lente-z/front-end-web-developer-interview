// 函数作为返回值
function create() {
  const a = 100
  return function () {
    console.log(a)
  }
}
const fn = create()
const a = 200
fn()

// 函数作为参数
function print(foo) {
  const b = 200
  foo()
}
const b = 100
function foo() {
  console.log(b)
}
print(foo)

