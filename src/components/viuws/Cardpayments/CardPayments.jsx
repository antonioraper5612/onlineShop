import React, {useContext } from "react";



//import styles
import "../Cardpayments/cardpayments.style.css";


//import Context
import AddProductContext from "../../../Context/AddProductContext"

//Import Componets
import EmptyCard from "../emptycard/EmptyCard"

const Cardpayments = () => {
  
  //Context
  const { state:stateAddProduct, dispatch: dispatchProductCard } = useContext(AddProductContext)
  const { cardShop,totalprecio,totalArticulos } = stateAddProduct

//UseState



//


  const handleAddCantidad = (items) => {
   
    const AddCantidad = cardShop.map(productos => productos.id === items.id ? { ...productos, cantidad: productos.cantidad + 1, } : productos)
    const  total= AddCantidad.map(productos=> productos.cantidad * productos.precio).reduce((prev,curr ) => prev + curr,0)
   const  totalArticulos= AddCantidad.map(product=> product.cantidad).reduce((prev,curr)=> prev + curr,0)
 
    dispatchProductCard({ type: "Update_AddCantidad", payload: {AddCantidad,total,totalArticulos } })
     
  }
  const handlesubcantidad = (items) => {
    const subcantidad = cardShop.map(productos => productos.id === items.id ? { ...productos, cantidad: productos.cantidad > 1 ? productos.cantidad - 1 : 1 } : productos)
    const  total= subcantidad.map(productos=> productos.cantidad * productos.precio).reduce((prev,curr ) => prev + curr,0)
    const totalArticulos= subcantidad.map(product=> product.cantidad).reduce((prev,curr)=> prev + curr,0)

    dispatchProductCard({ type: "Update_subcantidad", payload: {subcantidad,total,totalArticulos} })

  }
 

const handleremove=(item)=>{
  const newProductos = cardShop.filter(productos=> productos.id !== item.id)
  const  total= newProductos.map(productos=> productos.cantidad * productos.precio).reduce((prev,curr ) => prev + curr,0)
  const totalArticulos= newProductos.map(product=> product.cantidad).reduce((prev,curr)=> prev + curr,0)

  dispatchProductCard({ type: "Remove_Product_CardShop", payload: {newProductos,total,totalArticulos} })
}





  return (
    <>
      {cardShop.length > 0 ?
        <>   
          <div className="main-completar-payment">
            <button>Completar la Transaccion</button>
            <p>Articilos ({totalArticulos})</p>
            <hr />
            <p>Total A Pagar US ${totalprecio}</p>
          </div>
          {cardShop?.map((items,index) =>
              <div className="items-cards" key={index}>
                <img
                  src={`https://dbecommer.herokuapp.com${items?.ImgProducto[0]?.url}`}
                  alt={items.name}
                />
                <h4>{items.name}</h4>
                <span>US${items.precio}</span>
                <div className="main-cantidad">
                  <span>Cantidad:</span>
                  <div className="controlCantidad">
                    <button onClick={() => handlesubcantidad(items)}>-</button>
                    <span>{items.cantidad} </span>
                    <button onClick={() => handleAddCantidad(items)}>+</button>
                  </div>
                </div>
                <div className="main-total" >
                  <span>SubTotal</span>
                  <span>US${items.cantidad * items.precio}</span>
                  <button onClick={()=>handleremove(items)}>Eliminar</button>
                </div>
              </div>
          )}
        </>
        : <EmptyCard />}
    </>
  )


};

export default Cardpayments;
