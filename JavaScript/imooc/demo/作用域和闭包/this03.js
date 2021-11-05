class People {
  constructor(name) {
    this.name = name
    this.age = 20
  }
  sayHi() {
    console.log(this);
  }
}
const zhangsan = new People('张三')
zhangsan.sayHi()
// zhangsan对象