import React, { useState, useEffect } from 'react'
const Counter03 = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `You clicked ${count} times`
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count+1)}>
        Counter03 Click me
      </button>
    </div>
  )
}

export default Counter03