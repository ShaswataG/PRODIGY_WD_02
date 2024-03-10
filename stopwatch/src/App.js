import React from "react";
import Display from "./components/Display";
import Button from './components/Button';
import Lap from "./components/Lap";

export default function App() {
  const [time, setTime] = React.useState(
    {
      millisecond: 0,
      second: 0,
      minute: 0,
      hour: 0
    }
  )
  const [interv, setInterv] = React.useState()
  const [status, setStatus] = React.useState(0)
  const [lap, setLap] = React.useState([])

  const start = () => {
    run()
    setStatus(1)
    setInterv(setInterval(run, 10))
  }

  var updatedTime = {
    millisecond: time.millisecond,
    second: time.second,
    minute: time.minute,
    hour: time.hour
  }

  var updatedmillisecond = time.millisecond, updatedS = time.second, updatedM = time.minute, updatedH = time.hour
  const run = () => {
    // if (updatedTime.minute === 60) {
    //   updatedTime.hour++
    //   updatedTime.minute = 0
    // }
    // if (updatedTime.second === 60) {
    //   updatedTime.minute++
    //   updatedTime.second = 0
    // }
    // if (updatedTime.millisecond === 100) {
    //   updatedTime.second++
    //   updatedTime.millisecond = 0
    // }
    // updatedTime.millisecond++
    // return setTime(updatedTime)

    if (updatedM === 60) {
      updatedH++
      updatedM = 0
    }
    if (updatedS === 60) {
      updatedM++
      updatedS = 0
    }
    if (updatedmillisecond === 100) {
      updatedS++
      updatedmillisecond = 0
    }
    updatedmillisecond++
    return setTime({ millisecond: updatedmillisecond, second: updatedS, minute: updatedM, hour: updatedH })
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
      millisecond: 0,
      second: 0,
      minute: 0,
      hour: 0
    })
    setStatus(0)
    setLap([])
  }

  const flag = () => {
    setLap(prevLap => {
      return [
        ...prevLap,
        {
          ...time,
          lapNo: lap.length+1
        }
      ]
    })
  }
  const lapArray = lap.map(curr => (
    <Lap number={curr.lapNo} hour={curr.hour} minute={curr.minute} second={curr.second} millisecond={curr.millisecond} />
  ))

  return (
    <div className="outer-container">
      <div className="clock">
        <Display time={time} />
        <Button flag={flag} stop={stop} reset={reset} resume={resume} status={status} start={start} />
        <section className="lap-container">
          {lap.length > 0 && 
            <h4>
              <span className="lap-number">Lap</span>
              <span className="lap-time">Lap time</span>
            </h4>
          }
          {lapArray}
        </section>
      </div>
    </div>
  )
}