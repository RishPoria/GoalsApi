import React from 'react'
import {useDispatch} from 'react-redux'
import {deleteGoal} from '../features/goals/goalSlice'

function GoalItem({goal}) {
    const dispatch = useDispatch()
    
  return (
    <div className='goal'>
      <div>
          {new Date(goal.createdAt).toLocaleString('en-US')}
      </div>
      <h2>{goal.text}</h2>
      <h2>{goal.descriptiom}</h2>
      <h2>{goal.targetDate}</h2>
      <button onClick={()=> dispatchEvent(deleteGoal(goal._id))} className="close">X</button>

    </div>
  )
}

export default GoalItem
