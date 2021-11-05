function fn1() {
  console.log(this);
}
fn1()

fn1.call({x: 100})

const fn2 = fn1.bind({x : 200})
fn2()