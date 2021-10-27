// 类
class Student {
  constructor(name, number) {
    this.name = name
    this.number = number
  }
  sayHi() {
    console.log(
      `姓名：${this.name}， 学号：${this.number}`
    );
  }
}

// 通过类 new 对象/实例
const tom = new Student('Tom', 12)
tom.sayHi();

