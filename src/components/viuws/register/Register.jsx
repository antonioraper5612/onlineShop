import React,{useState,useContext} from 'react'

import "../register/register.style.css";

//Import Componentes
import LoginContext from '../../../Context/LoginContext';


const Register = () => {

  const [userInfo,setUserInfo]=useState ({email:"",password:""})

  const handleRegister =()=>{

  }
        return (
          <>
            <form onClick={handleRegister}>
              <div className="main-register">
                <div className="register-container">
                  <h1>¡Hola! Register</h1>
                  <label>E-mail o usuario</label>
                  <input type="text" onChange={(e)=>setUserInfo({...userInfo,email:e.target.value})} />
                  <label>Password</label>
                  <input type="password" onChange={(e)=>setUserInfo({...userInfo,password:e.target.value})}/>
                  <div className="register-buttons">
                  <button>Register</button>
                  </div>
                </div>
              </div>
            </form>
            </>
          );

}

export default Register

