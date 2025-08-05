import React, { useState } from 'react';
import './LoginSignup.css'

//icons imported for the username, password, and email 
import User_icon from '../../assets/User_icon.png'
import Password_icon from '../../assets/Password_icon.png'


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
                    <img src={User_icon} alt='' width={20} height={20}  />
                    <input type='text' placeholder ='Username or Email' />
                </div>
                <div className='input'>
                    <img src={Password_icon} alt='' width={20} height={20}/>
                    <input type='password' placeholder='Password' />
                </div>
            </div>

            <div className='forgot-password'>Lost Password? <span>Click Here</span></div>

            <div className='submit-container'>   
                <div className={action=== 'Login'?'submit gray':'submit'} onClick={() =>{setAction('Sign Up')}}>Sign Up</div> 
                <div className= {action ==='Sign Up'?'submit gray':'submit'} onClick={() => {setAction('Login')}}>Login </div>
            </div>
        </div>
    </div>
  )
}