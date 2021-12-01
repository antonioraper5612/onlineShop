import React from 'react'
import { useHistory } from 'react-router'

import cardImg from "../../iconos/carritocompras.png"
import "../emptycard/emptycard.style.css"



const EmptyCard = () => {
 const history = useHistory()

    const handleShop =()=>{
        history.push("/")
    }


    return (
        <div className="main-Container-Empty">
            <img src={cardImg} alt=""></img>
            <h2>NO TIENES PRODUCTOS EN TU CARRITO</h2>
            <h3>Encuentra los mejores productos, a los mejores precios.</h3>
            <button onClick={handleShop}>Comprar Ahora</button>
        </div>
    )
}

export default EmptyCard
