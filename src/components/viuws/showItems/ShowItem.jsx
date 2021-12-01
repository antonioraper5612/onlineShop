import React, { useState, useEffect, useContext } from "react";
import { useParams,useHistory } from "react-router-dom";



//import context
import AddProductContext from "../../../Context/AddProductContext";
import ProductContext from "../../../Context/ProductContext";

//import Componentes
import Showimg from "../showItems/showimg/Showimg"

//import img
import logoTarjetas from "../../iconos/Tarjetas-2.jpg";
import logoCripto from "../../iconos/logoCripto.png";
import logoenvios from "../../iconos/envios.png";


//import styles
import "../showItems/showitem.style.css";

const ShowItem = () => {
  //Useparams
  let { id } = useParams();
  id = parseInt(id)

  //Use History

  const history =useHistory()

  //Context Todos Los Productos
  const { state: stateProduct, dispatch: dispatchProduct } = useContext(ProductContext)
  const { product } = stateProduct


  //Context Carrito
  const { state: stateCard, dispatch: dispatchProductCard } = useContext(AddProductContext)
  const { cardShop } = stateCard

  //useState
  const [filterItem, setFilterItem] = useState([]);
  const [numberimge, setNumberImg] = useState(0);
  const [cardActive, setCardActive] = useState([])


  const handleAddAndLocation = (e)=>{
   const  events = e.target.innerText
    if (events !== "Ir Al Carrito") {
      handleAdd({...filterItem[0],cantidad:1})
    } else {
      history.push("/Card.Payments")
    }
  }

  const handleAdd = (item) => {
    let newProduct;
    let total;
    let totalArticulos;
    let isnewProduct = cardShop.find(product => (product.id === item.id))
    if (isnewProduct) {
      newProduct = cardShop.map(product => (product.id === item.id ? { ...product, cantidad: product.cantidad + 1 } : product))
        total= newProduct.map(productos=> productos.cantidad * productos.precio).reduce((prev,curr ) => prev + curr,0)
        totalArticulos= newProduct.map(product=> product.cantidad).reduce((prev,curr)=> prev + curr,0)

      } else {
      newProduct = [...cardShop, item]
      total= newProduct.map(productos=> productos.cantidad * productos.precio).reduce((prev,curr ) => prev + curr,0)
      totalArticulos= newProduct.map(product=> product.cantidad).reduce((prev,curr)=> prev + curr,0)
    }

   
    dispatchProductCard({ type: "ADD_Product_CardShop", payload:{newProduct,total,totalArticulos}} )

  }



  useEffect(() => {
    const handleProduct = async () => {
      const API = "https://dbecommer.herokuapp.com/Productos"
      const request = await fetch(API)
      const result = await request.json()
      dispatchProduct({ type: "Product_All", payload: result })
    }
    handleProduct()
  }, [dispatchProduct]);


  useEffect(() => {
    if (id !== undefined) {
      setFilterItem(
        product.filter(item => (item.id === id))
      )
    }

  }, [product, id])

  const handleimg = (count) => {
    setNumberImg(count);
  };


  useEffect(() => {
  
    if (cardShop.length >  0 ) {
     const newproduct= cardShop.find(product => product.id === id)
      setCardActive(newproduct)
    }

  }, [id,cardShop])


  return (
    <>
      <div className="show-main">
        {filterItem && filterItem.length > 0 && (
          <>
            <Showimg
              img={filterItem[0].ImgProductocard}
              handleimg={handleimg}
            />
            <div className="show-main-img">
              <img
                src={`https://dbecommer.herokuapp.com${filterItem[0]?.ImgProducto[numberimge]?.url}`}
                alt="IMG"
              ></img>
            </div>
            <div className="main-content-show">
              <div>
                <h2>{filterItem[0].name}</h2>
              </div>
              <div className="main-price-img">
                <h4>${filterItem[0].precio} USD</h4>
                <p>Hasta 48 cuotas</p>
                <img src={logoTarjetas} alt="tarjetas" />
                <img src={logoCripto} alt="imgcriptomonedas" />
                <hr />
                <p>Envios A Nivel Nacional Gratis</p>
                <img src={logoenvios} alt="Envios" />
              </div>
              <div className="main-content-show-button">
                <button>Comprar Ya!</button>

                <button onClick={(e) => handleAddAndLocation(e)}  >  {cardActive &&cardActive.id === id ? "Ir Al Carrito" : "Agregar Al Carrito"}</button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ShowItem;
