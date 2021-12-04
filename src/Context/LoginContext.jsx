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
          case "Login_Email":
          return{
             ...state,
             user:action.payload
          }
          case "Register_User":
              return{
                ...state,
                user:action.payload
              }
              case "sigOut_Login":
              return{
                ...state,
                user:action.payload
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