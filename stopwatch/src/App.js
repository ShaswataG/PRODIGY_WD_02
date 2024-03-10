import React from "react";
import Display from "./components/Display";
import Btn from './components/Btn';

export default function App() {
  const [time, setTime] = React.useState(
    {
      ms: 0,
      s: 0,
      m: 0,
      h: 0
    }
  )
  const [interv, setInterv] = React.useState()
  const [status, setStatus] = React.useState(0)

  const start = () => {
    run()
    setStatus(1)
    setInterv(setInterval(run, 10))
  }

  var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h
  const run = () => {
    if (updatedM === 60) {
      updatedH++
      updatedM = 0
    }
    if (updatedS === 60) {
      updatedM++
      updatedS = 0
    }
    if (updatedMs === 100) {
      updatedS++
      updatedMs = 0
    }
    updatedMs++
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH })
  }

  const stop = () => {
    clearInterval(interv)
    setStatus(2)
  }

  const resume = () => {
    start()
  }

  const reset = () => {
    clearInterval(interv)
    setTime({
      ms: 0,
      s: 0,
      m: 0,
      h: 0
    })
    setStatus(0)
  }

  return (
    <div className="clock">
      <Display time={time} />
      <Btn stop={stop} reset={reset} resume={resume} status={status} start={start} />
    </div>
  )
}