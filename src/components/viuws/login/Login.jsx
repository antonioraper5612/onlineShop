import React,{useState,useContext} from "react";

import logoGoogle from '../../iconos/google.png'
import "../login/login.style.css";

import { firebase,provedor } from "../../firebase/firebase.config.js"

//Importar Componentes


//Importar Context
import LoginContext from "../../../Context/LoginContext";


const Login = () => {

  //UseContex
  const {dispatch:dispatchLogin}=useContext(LoginContext)

   const [userInfo,setUserInfo]=useState ({email:"",password:""})
 
 
  const handleLogin = ()=>{
   
 console.log(userInfo)
  }
  
  const handleLoginGoole= async ()=>{
    const { user } = await firebase.auth().signInWithPopup(provedor.google)
    const { displayName, email, uid } = user
  
  dispatchLogin({type:"Login_Google",payload:{displayName, email, uid}})
  }
 
 
  return (
    <>
      <div className="main-login">
        <div className="login-container">
          <h1>¡Hola! Ingrese tu e-mail o Usuario</h1>
          <form className="form-login" >
          <label>E-mail o usuario</label>
          <input type="text" onChange={(e)=>setUserInfo({...userInfo,email:e.target.value})}  />
          <label>Password</label>
          <input type="password" onChange={(e)=>setUserInfo({...userInfo,password:e.target.value})} />
          </form>
          <div className="login-buttons">
          <button onClick={handleLogin}>Ingresar</button>
        <button onClick={handleLoginGoole}>LOGIN WITH GOOGLE <img src={logoGoogle} alt="Google" /></button>
          </div>
        </div>
      </div>
   </>    
  );
};

export default Login;
