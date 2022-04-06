import React, { useState, useEffect } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { email, password } = formData 

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

  }

  return (
    <>
      <section className='heading'>
        <h1>
          <AccountCircleIcon fontSize='large' /> Login        
        </h1>
        <p>Login and start setting Goals</p>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input type="email" className='form-control' id='email' name='email' value={email} placeholder='Enter email ID' onChange={onChange} />
          </div>
          <div className="form-group">
            <input type="password" className='form-control' id='password' name='password' value={password} placeholder='Enter password' onChange={onChange} />
          </div> 
          <div className="form-group">
            <button type="submit" className='btn btn-block'>Create Account</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login