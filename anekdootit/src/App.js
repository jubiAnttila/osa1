import React, { useState } from 'react'


const Button = (props) => {
  return(
    <button onClick={props.handleClick}> 
    {props.text} 
    </button>      
  )
}


const App = (props) => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(6).fill(0))
  const random = () => Math.floor((Math.random() * 6))
 
  
  const mostVotes = votes.indexOf(Math.max(...votes))


  const voteAnecdote = (i) => { 
    const copy = [...votes]
    copy[i] += 1
    setVotes(copy)
  }
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}<br></br> {votes[selected]}</p>
      <Button handleClick={() => voteAnecdote(selected)} text={"vote"}/>
      <Button handleClick={() => setSelected(random)} text="next anecdote"/>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[mostVotes]} {votes[mostVotes]}</p>
    
    </div>
  )
}

export default App