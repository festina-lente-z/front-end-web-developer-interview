// vue 特点 数据变化 更新视图 监控数据的变化 数据变化后需要更新视图

// 被观察者
class Subject {
  constructor() {
    this.state = 'happy'
    this.arr = []
  }
  attach(o) {
    // 把观察者的实例push到数组里 订阅
    this.arr.push(o)
  }
  setState(newState) {
    this.state = newState
    this.arr.forEach(o => o.update(newState))
  }
}

// 观察者
class Observer {
  constructor(name) {
    this.name = name
  }
  update(newState) {
    console.log(`${this.name}: baby state - ${newState}`);
  }
}

let s = new Subject('baby')
let o1 = new Observer('mom')
let o2 = new Observer('dad')
// 观察者和被观察者之间建立联系，被观察者需要得到观察者的许可？
s.attach(o1)
//s.attach(o2)
s.setState('hungry')
s.setState('happy')