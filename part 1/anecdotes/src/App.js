import React, { useState } from 'react'

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const points = [0, 0, 0, 0, 0, 0, 0]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(points)
  
  const randomAnecdote = () => {
    let random = Math.floor(Math.random()*anecdotes.length)
    return setSelected(random)
  }

  const handleVotes = (currentAnecdoteIndex) => {
    const increaseVotes = votes.map((current, index) => {
      if (index === currentAnecdoteIndex) {
        return (current + 1)
      }
      else {
        return current
      }
    })
    setVotes(increaseVotes)
  }

  const highestVotes = () => {
    const max = Math.max(...votes)
    const index = votes.indexOf(max)
    return index
  }

  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p>
        <p>has {votes[selected]} votes</p>
        {console.log(votes)}
        {console.log(Math.max(...votes))}
        <button onClick={() => handleVotes(selected)}>vote</button>
        <button onClick={randomAnecdote}>next anecdote</button>
      </div>
      <div>
        <h1>Anecdotes with most votes</h1>
        <p>{anecdotes[highestVotes()]}</p>
        <p>has {votes[highestVotes()]} votes</p>
      </div>
    </div>
  )
}

export default App