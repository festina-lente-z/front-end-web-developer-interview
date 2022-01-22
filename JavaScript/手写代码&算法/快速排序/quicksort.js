const quicksort = (arr) => {
  if(arr.length < 2) {
    return arr
  }
  else {
    let pivot = arr[0]
    let left = []
    let right = []
    arr.forEach(x => x >= pivot ? left.push(x) : right.push(x))
    return [...quicksort(left), pivot, ...quicksort(right)]
  }
}

let arr = [2,4,1,7,5,9,6,0]

console.log(quicksort(arr))