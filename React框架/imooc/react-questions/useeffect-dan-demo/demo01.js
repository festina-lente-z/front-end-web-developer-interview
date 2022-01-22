function sayHi(person) {
  const name = person.name;
  setTimeout(() => {
    alert('Hello,' + name)
  }, 3000)
}

let someone = {name: 'Dan'}
sayHi(someone) // Hello,Dan

someone = {name: 'Yuzhi'}
sayHi(someone) // Hello,Yuzhi

someone = {name: 'Dominic'}
sayHi(someone) // Hello,Dominic