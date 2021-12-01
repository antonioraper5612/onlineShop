
import {createContext,useReducer} from "react";

const AddProductContext=createContext()


const initialState = {
  cardShop:[],
  totalArticulos:0,
  totalprecio:0
  }



 const reducer = (state,action)=>{
    switch (action.type) {
        
        case "ADD_Product_CardShop":            
            return {
                ...state,
                cardShop: action.payload.newProduct,
                totalprecio:action.payload.total,
                totalArticulos:action.payload.totalArticulos
            }
              
         case"Remove_Product_CardShop":
          return{
             ...state,
              cardShop:action.payload.newProductos,
              totalprecio:action.payload.total,
              totalArticulos:action.payload.totalArticulos
              
          }
          case"Update_AddCantidad":
          return{
            ...state,
            cardShop:action.payload.AddCantidad, 
            totalprecio:action.payload.total,  
            totalArticulos:action.payload.totalArticulos       
          }
          case "Update_subcantidad":
            return{
              ...state,
              cardShop:action.payload.subcantidad, 
              totalprecio: action.payload.total,
              totalArticulos:action.payload.totalArticulos   
            }
          
         
        default:
            return state;
    }

}

const AddProductProvider =({children})=>{

 const [state,dispatch]=useReducer(reducer,initialState)

    const data={
    state,
    dispatch,
  }

  return ( 
  <AddProductContext.Provider value={data}>
    {children}
    </AddProductContext.Provider>
  )
}

export {AddProductProvider}
export default  AddProductContext