let count = 0;
(function immediate() {
  if (count === 0) {
    var count = 1
    console.log(count)
  }
  console.log(count)
})()