import React, { useState, useCallback } from 'react'


let num = 0 // 用于记录当前组件执行次数

export default function Timera() {
  console.log('Timera render num: ', ++num) // 打印执行次数
  
  // 定义time state 用于保存计时的累积时间
  const [time, setTime] = useState(0)

  const [timer, setTimer] = useState(null)

  // 开始计时的事件处理函数
  const handleStart = useCallback(() => {
    let timera = window.setInterval(() => {
      setTime((time) => time + 1)
    }, 1000)
    setTimer(timera) 
  }, [])

  // 暂停计时的事件处理函数
  const handlePause = useCallback(() => {
    // 使用 clearInterval 来停止计时
    window.clearInterval(timer)
  }, [])

  return (
    <div>
      {time} seconds
      <br />
      <button onClick={handleStart}>start</button>
      <button onClick={handlePause}>pause</button>
    </div>
  )
}