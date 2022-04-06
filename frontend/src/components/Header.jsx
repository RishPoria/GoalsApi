import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>GoalSetter</Link>
      </div>
      <ul>
        <li>
          <Link to='/login'>
            <AccountCircleIcon /> Login
          </Link> 
        </li>
        <li>
          <Link to='/register'>
            <PersonAddIcon /> Register
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header