import React, { useState } from 'react'
import Button from './Button'
import Statistics from './Statistics'

const App = () => {

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodScore = () => {
    return setGood(good+1)
  }

  const neutralScore = () => {
    return setNeutral(neutral+1)
  }

  const badScore = () => {
    return setBad(bad+1)      
  }
  
  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button text='good' onClick={goodScore}/>
        <Button text='neutral' onClick={neutralScore}/>
        <Button text='bad' onClick={badScore}/>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad}/>
      </div>
  )
}

export default App;
