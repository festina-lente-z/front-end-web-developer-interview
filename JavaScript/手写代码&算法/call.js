// 手写call
Function.prototype.myCall = function(context, ...arg) {
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

function greet(a,b) {
  var reply = [this.animal, 'typically sleep between', this.sleepDuration, a, b].join(' ');
  console.log(reply);
}

var obj = {
  animal: 'cats', sleepDuration: '12 and 16 hours'
};

greet.myCall(obj,'apple','banana');  // cats typically sleep between 12 and 16 hours

