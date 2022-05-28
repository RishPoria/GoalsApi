import React from 'react'
import { useDispatch } from 'react-redux'
import {deleteGoal} from '../features/goals/goalSlice'

function GoalItem({goal}) {
  const dispatch = useDispatch()

  return (
    <div className='goal'>
      <div className='date'>
        <h4>Created on: </h4>
        <p> &ensp; {new Date(goal.createdAt).toLocaleString('en-IN').split(',')[0]}</p>
      </div>
      <h2>{goal.text}</h2>
      <p>{goal.description.length < 27 ? goal.description : goal.description.substring(0, 27) + '...'}</p>
      <div className='date'>
        <h4>Target: </h4>
        <p> &ensp; {new Date(goal.targetDate).toLocaleString('en-IN').split(',')[0]}</p>
      </div>
      <button onClick={()=> dispatch(deleteGoal(goal._id))} className="close">X</button>
    </div>
  )
}

export default GoalItem
