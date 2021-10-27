// 父类
class People {
  constructor(name, gender) {
    this.name = name
    this.gender = gender
  }
  eat() {
    console.log(`${this.name} eat apple`);
  }
}

// 子类
class Student extends People {
  constructor(name, gender, number){
    super(name, gender)
    this.number = number
  }
  sayHi() {
    console.log(`姓名：${this.name}，性别：${this.gender}，学号：${this.number}`);
  }
}

const tom = new Student('Tom', 'male', 13)
// tom.sayHi()
// tom.eat()

// 宠物
class Cat extends Student {
  constructor(name, gender, number, color){
    super(name, gender, number, color)
    this.color = color
  }
  sleep() {
    console.log(`姓名：${this.name}，性别：${this.gender}，编号：${this.number}，花色：${this.color}`);
  }
}
const jack = new Cat('Jack', 'male', 1, 'black')

// 子类
class Teacher extends People {
  constructor(name, major) {
    super(name)
    this.major = major
  }
  teach() {
    console.log(`${this.name} teach ${this.major}`);
  }
}

const amy = new Teacher('Amy', 'math')
// amy.teach()
// amy.eat()

// console.log(`amy instanceof People ？- ${amy instanceof People}`);
// console.log(`amy instanceof Student ？- ${amy instanceof Student}`);
// console.log(`amy instanceof Teacher ？- ${amy instanceof Teacher}`);

// console.log(`[] instanceof Array ？- ${[] instanceof Array}`);
// console.log(`[] instanceof Object ？- ${[] instanceof Object}`);
// console.log(`{} instanceof Array ？- ${{} instanceof Object}`);

// class是一种语法糖，实际上class是函数
// console.log(`typeof People ？- ${typeof People}`);
// console.log(`typeof Student ？- ${typeof Student}`);