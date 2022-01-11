let a = 1

async function test() {
  a = a + await a;
  console.log(a)
}
//test() //2
a = 3;
console.log(a);
//test() //6