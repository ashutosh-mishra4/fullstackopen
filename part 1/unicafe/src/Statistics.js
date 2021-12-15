import React from 'react'
import StatisticLine from './StatisticLine'

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

export default Statistics