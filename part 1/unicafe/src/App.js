import React, { useState } from 'react'
import StatisticLine from './StatisticLine'
import Button from './Button'

const Statistics = ({good, neutral, bad}) => {

  let goodPoint = good*1
  let badPoint = bad*(-1)

  return( 
    <div>
      <div>
        <h1>statistics</h1>
      </div>
      <div>
        <StatisticLine text='good' value={good} />
        <StatisticLine text='neutral' value={neutral} />
        <StatisticLine text='bad' value={bad} />
        <StatisticLine text='all' value={good+neutral+bad} />
        <StatisticLine text='average' value={(goodPoint+badPoint)} />
        <StatisticLine text='positive' value={good/(good+neutral+bad)*100} />
      </div>
    </div> 

  )
}

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
