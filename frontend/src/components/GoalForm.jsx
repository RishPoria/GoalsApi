import React from 'react'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {toast} from 'react-toastify'
import {createGoal} from '../features/goals/goalSlice'

function GoalForm() {

    const [formData, setFormData] = useState({
      text: '',
      description: '',
      targetDate: new Date(),
    })

    const {text, description, targetDate} = formData

    const dispatch = useDispatch()

    const onChange = (e) => {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value
      }))
    }

    const onSubmit = e => {
        e.preventDefault()
        if(text.length==0)
          toast.error("Add goal")
        else{
          const goalData = {
            text, 
            description, 
            targetDate, 
          }
          dispatch(createGoal({goalData}))
        }
    }
  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className="form-group">
            <label htmlFor="text">Goal</label>
            <input type="text" name='text' id='text' value={text} placeholder='Enter goal' onChange={onChange} />
        </div>
        <div className="form-group">
            <label htmlFor="text">Description</label>
            <input type="text" name='description' id='description' value={description} placeholder='Enter description' onChange={onChange} />
        </div>
        <div className="form-group">
            <label htmlFor="text">Target Date</label>
            <input type="date" name='targetDate' id='targetDate' value={targetDate} onChange={onChange} />
        </div>
        <div className="form-group">
            <button className="btn btn-block" type='submit'>
                Add Goal
            </button>
        </div>
      </form>
    </section>
  )
}

export default GoalForm
