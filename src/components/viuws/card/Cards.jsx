import React,{useContext} from "react";
import{useHistory} from "react-router-dom"
import { Card } from "react-bootstrap";

import ProductContext from "../../../Context/ProductContext"

import "../card/cards.style.css"

const Cards = () => {
  //Hook Context
  const {state} = useContext(ProductContext)
  const {product,searchProcuct}= state 
 //Hook Reac-Router_dom
  const historys= useHistory()




  const handleAdd = (id,name) => {
    historys.push(`/Item/product${id}`)
  };



  return (
<>
{searchProcuct?.length === 0 ? 
  <>
  {product.map(items=>(
    <div className="cards" key={items.id}>
      <Card  onClick={() => handleAdd(items.id)} id="cards-product">
        <div className="main-card-img">
        <Card.Img variant="top" src={`https://dbecommer.herokuapp.com${items?.ImgProducto[0]?.url}`} />
        </div>
        <div className="main-card-title">
          <h3>{items.name}</h3>
          <span>USD${items.precio}</span>
        </div>
      </Card>
    </div>
    ))} 
  </>
  : <>
  {searchProcuct.map(items=>(
    <div className="cards" key={items.id}>
      <Card  onClick={() => handleAdd(items.id)} style={{ width: "13rem" }}>
        <div className="main-card-img">
        <Card.Img variant="top" src={`https://dbecommer.herokuapp.com${items?.ImgProducto[0]?.url}`} />
        </div>
        <div className="main-card-title">
          <h3>{items.name}</h3>
          <span>USD${items.precio}</span>
        </div>
      </Card>
    </div>
    ))} 
    </> }
    </>  
      );
};

export default Cards;
