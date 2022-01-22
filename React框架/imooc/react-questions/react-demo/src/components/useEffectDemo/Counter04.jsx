import React, { useState, useEffect } from 'react'

const Counter04 = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      console.log(`You clicked ${count} times`)
    }, 3000)
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Counter04 Click me
      </button>
    </div>
  )
}

export default Counter04