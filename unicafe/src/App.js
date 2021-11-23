import React, { useState } from 'react'


const Button = (props) => {
  return (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
  )
}

const Statistics = (props) => {
  if(props.total === 0) {
    return (
      <div>
        no feedback given
      </div>
    )
  }
  return (
    <table>
      <tbody>
        <Statistic text="good" value={props.good} />
        <Statistic text="neutral" value={props.neutral} />
        <Statistic text="bad" value={props.bad} />
        <Statistic text="all" value={props.total} />
        <Statistic text="average" value={props.average} />
        <Statistic text="positive" value={props.positive} />
       </tbody>
      </table>
  )
}

const Statistic = (props) => {
  return (
    <tr>
     <td>{props.text} </td>
     <td>{props.value}</td>
    </tr>
     
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [totalPoints, setTotalPoints] = useState(0)
  let average = totalPoints / total
  let positive = good / total
  
  


  const handleGoodClick = () => {
    setGood(good + 1)
    setTotal(total + 1)
    setTotalPoints(totalPoints + 1)
    return good
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
    return neutral
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setTotal(total + 1)
    setTotalPoints(totalPoints - 1)
    return bad
  }


  return (
    
    <div>
      <h1>Give feedback</h1> 
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad"/> 
      <h2>Statistics</h2>
      <Statistics good={good}
                  bad={bad}
                  neutral={neutral}
                  total={total}
                  average={average}
                  positive={positive * 100 + ' %'} />
    </div>
  )
}

export default App