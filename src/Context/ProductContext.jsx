
import {createContext,useReducer} from "react";


const ProductContext=createContext()


const initialState = {
  product:[],
  searchProcuct:[],
 
  }



 const reducer = (state,action)=>{
    switch (action.type) {
        case "Product_All":
        return{
             ...state,
             product: action.payload
        }
        case "Search_Product":
          return{
               ...state,
               searchProcuct: action.payload
          }

        default:
            return state;
    }

}

const ProductProvider =({children})=>{

 const [state,dispatch]=useReducer(reducer,initialState)

    const data={
    state,
    dispatch,
  }

  return ( 
  <ProductContext.Provider value={data}>
    {children}
    </ProductContext.Provider>
  )
}

export {ProductProvider}
export default  ProductContext