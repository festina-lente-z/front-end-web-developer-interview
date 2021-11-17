let promise = new Promise(function(resolve, reject) {
  // setTimeout(() => resolve("done!"), 1000);
  setTimeout(() => reject(new Error("Whoops!"), 1000))
})

// resolve 运行 .then中的第一个函数
promise.then(
  result => alert(result),
  error => alert(error)
)