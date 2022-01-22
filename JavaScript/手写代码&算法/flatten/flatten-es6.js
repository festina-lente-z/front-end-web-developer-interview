const flatten1 = (arr) => {
  while(arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

let arr2 = [1,2,3,[4,5,[6,7,[8]]],9,10]
console.log(flatten1(arr2))