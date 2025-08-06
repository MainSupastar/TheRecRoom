import React, { useState } from 'react';
import './LoginSignup.css'

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
                    <input type='username' placeholder ='Username or Email' />
                </div>
                <div className='input'>
                    <input type='password' placeholder='Password' />
                </div>
            </div>
            
            <div className='rememberMe'>
                <input type='checkbox' id='RememberMeCheckbox'/>
                <label htmlFor='RememberMeCheckbox'> Remember Me</label> 
            </div>

            <div className='forgot-password'>Forgot Password? <span>Click Here</span></div>

            <div className='submit-container'>   
                <div className={action=== 'Login'?'submit gray':'submit'} onClick={() =>{setAction('Sign Up')}}>Sign Up</div> 
                <div className= {action ==='Sign Up'?'submit gray':'submit'} onClick={() => {setAction('Login')}}>Login </div>
            </div>
        </div>
    </div>
  )
}