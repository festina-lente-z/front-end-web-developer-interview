let countClicks = 10;
const GamepadButton = document.getElementById('btn')
GamepadButton.addEventListener('click', function clickHandler() {
  countClicks++;
  console.log(countClicks)
})

const result = (function immediate(number) {
  const message = `number is: ${number + countClicks}`
  return message
})(100)
console.log(result)

setTimeout(function delayedReload() {
  // location.reload()
  console.log(countClicks);
},1000)