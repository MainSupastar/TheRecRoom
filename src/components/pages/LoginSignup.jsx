import React, { useState } from 'react';
import './LoginSignup.css'

//icons imported for the username, password, and email 
import user_icon from '../../assets/user.png'
import password_icon from '../../assets/password.png'


 export const LoginSignup = () => {

//to change the state of the Login/Sign Up page
const [action,setAction] = useState('Sign Up');

  return (
    <div>
        <div className='containerLogin'>
            <div className='headerLogin'>
                <div className='textLogin'>{action} </div>
                <div className='underlineLogin'></div>
            </div>

            <div className='inputs'>
                <div className='input'>
                    <img src={user_icon} alt='' width={20} height={20}  />
                    <input type='text' placeholder ='Username or Email' />
                </div>
                <div className='input'>
                    <img src={password_icon} alt='' width={20} height={20}/>
                    <input type='password' placeholder='Password' />
                </div>
            </div>

            <div className='forgot-password'>Lost Password? <span>Click Here</span></div>

            <div className='submit-container'>   
                <div className={action=== 'Login'?'submit gray':'submit'} onClick={() =>{setAction('SignUp')}}>Sign Up</div> 
                <div className= {action ==='Sign Up'?'submit gray':'submit'} onClick={() => {setAction('Login')}}>Login </div>
            </div>
        </div>
    </div>
  )
}
