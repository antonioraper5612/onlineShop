import React,{useState,useContext,useEffect} from "react";

import logoGoogle from '../../iconos/google.png'
import "../login/login.style.css";

import { firebase,provedor } from "../../firebase/firebase.config.js"

//Importar Componentes
import MainAlerts from "../../alerts/MainAlerts"

//Importar Context
import LoginContext from "../../../Context/LoginContext";


import { useHistory } from "react-router";
import { cleanup } from "@testing-library/react";

const Login = () => {

 const history=useHistory()

  //UseContex
  const {state:stateLogin  ,dispatch:dispatchLogin}=useContext(LoginContext)

   const [userInfo,setUserInfo]=useState ({email:"",password:""})
 
   const [errorLogin,setErrorLogin]=useState(false)
 
  const handleLogin = async ()=>{
    try {
      const { user } = await firebase.auth().signInWithEmailAndPassword(userInfo.email,userInfo.password)
      const { displayName, email, uid,photoURL } = user
      dispatchLogin({type:"Login_Email",payload:{displayName, email, uid,photoURL}})
      setErrorLogin(false)
    } catch (error) {
      setErrorLogin(true)
    } 
   
  }
  
  const handleLoginGoole= async ()=>{
    try {
      const { user } = await firebase.auth().signInWithPopup(provedor.google)
      const { displayName, email, uid,photoURL } = user
    dispatchLogin({type:"Login_Google",payload:{displayName, email, uid,photoURL}})
    } catch (error) {
       console.log(error)
    }

  }
 
  useEffect(()=>{
    if(stateLogin?.user?.uid){
        history.push("/")
    }
    return()=>{
      cleanup()
    }
  },[stateLogin,history])

 
  return (
    <>
      <div className="main-login">
        <div className="login-container">
          <h1>¡Hola! Ingrese tu e-mail o Usuario</h1>
          {errorLogin &&
                  <MainAlerts message="!Usuario O Password Incorrectos"/>}
          <form className="form-login" >
          <label>E-mail o usuario</label>
          <input type="text" onChange={(e)=>setUserInfo({...userInfo,email:e.target.value})} required  />
          <label>Password</label>
          <input type="password" onChange={(e)=>setUserInfo({...userInfo,password:e.target.value})} required />
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
