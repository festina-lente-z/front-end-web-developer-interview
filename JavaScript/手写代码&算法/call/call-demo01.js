function superClass () {
  this.a = 1
  this.print = function () {
    console.log(this.a);
  }
}

function subClass () {
  superClass.call(this)
  this.print()
}

subClass()