// class语法
class User {
  constructor(name) {
    this.name = name
  }
  sayHi() {
    console.log(this.name)
  }
}

let user = new User('John')
user.sayHi()

// new会自动调用constructor()方法，因此我们可以在constructor()中初始化对象