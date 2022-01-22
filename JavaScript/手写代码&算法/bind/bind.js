// bind()方法会创建一个新函数。
// 当这个新函数被调用时，bind()的第一个参数将作为它运行时的This
// bind 返回一个函数，可以传入参数
Function.prototype.bind1 = function (context) {
  var self = this;
  return function () {
    return self.apply(context)
  }
}
Function.prototype.bind2 = function (context) {
  
}