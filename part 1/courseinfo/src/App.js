import React from 'react'
import Header from './Header.js'
import Content from './Content.js'
import Total from './Total.js'

const App = () => {
  const course = {
    name: 'Half stack application development',
    parts = [
      {
        name: 'Fundamentals of React',
        exercises1: 10
      },
      {
        name: 'Using props to pass data',
        exercises2: 7
      },
      {
        name: 'State of a component',
        exercises3: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App;
