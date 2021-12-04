import React,{useState,useContext,useEffect} from 'react'
import { useHistory } from 'react-router';


import "../register/register.style.css";


import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import LoginContext from '../../../Context/LoginContext';
import MainAlerts from '../../alerts/MainAlerts';


//Import Componentes


const Register = () => {


const {state:stateLogin ,dispatch:dispatchLogin}=useContext(LoginContext)

  const [userInfo,setUserInfo]=useState ({email:"",password:""})

  const [errorRegister,setErrorRegister]=useState(false)
  const history=useHistory()

  const handleRegister  = async(e)=>{
     e.preventDefault()
    const auth = getAuth();
    try {
      const {user} = await createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
      const { displayName, email, uid } = user
      
      dispatchLogin({type:"Register_User",payload:{displayName, email, uid }})
      setErrorRegister(false) 
    } catch (error) {
      setErrorRegister(true)
    }
 
  }

  useEffect(()=>{
    if(stateLogin?.user?.uid){
        history.push("/")
    }
  },[stateLogin.user,history])

        return (
          <>
            <form onSubmit={handleRegister}>
              <div className="main-register">
                <div className="register-container">
                  <h1>¡Hola! Register</h1>
                  {errorRegister &&
                  <MainAlerts message="!Usuario ya Se Encuantra Registrado"/>}
                  <label>E-mail</label>
                  <input type="text" onChange={(e)=>setUserInfo({...userInfo,email:e.target.value})} required />
                  <label>Password</label>
                  <input type="password" onChange={(e)=>setUserInfo({...userInfo,password:e.target.value})} required/>
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

