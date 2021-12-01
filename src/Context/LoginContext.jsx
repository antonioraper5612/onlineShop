import React,{createContext,useReducer} from "react";


const LoginContext=createContext()

const initialState={
  user:null
}

const reducer =(state,action)=>{
    switch (action.type) {
        case "Login_Google":
          return{
             ...state,
             user:action.payload
          }
          case "Register_Email":
              return{

              }
        default:
            return state
            
    }

}

const LoginProvider=({children})=>{

    const [state,dispatch]=useReducer(reducer,initialState)
    const data={
        state,
        dispatch
    }
    return(
 <LoginContext.Provider value={data}>
     {children}
 </LoginContext.Provider>
    )
}
export {LoginProvider}
export default LoginContext