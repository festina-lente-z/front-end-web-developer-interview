// 手写call
Function.prototype.myCall = function(context, ...arg) {
  // context == null 相当于 context === null || context === undefined
  if (context == null) {
    context = this
  } else {
    context = Object(context)
  }
  
  const uniqueProp = Symbol()
  context[uniqueProp] = this
  console.log('this: ',this);
  console.log('context: ',context);
  const res = context[uniqueProp](...arg)
  delete context[uniqueProp]
  return res
}

// 借用mdn上的例子
function greet(a,b) {
  var reply = [this.animal, 'typically sleep between', this.sleepDuration, a, b].join(' ');
  console.log(reply);
}

var obj = {
  animal: 'cats', sleepDuration: '12 and 16 hours'
};

greet.myCall(obj,'apple','banana');
