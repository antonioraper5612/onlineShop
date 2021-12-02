import React, { useState } from 'react'

import "../menuhamburgueza/menuhamburgueza.style.css"

import shopping from "../../iconos/shopping.png"

import { Link,useHistory } from 'react-router-dom'

//iconos
import iconUser from "../../iconos/user.png"
import iconOferta from "../../iconos/003-tag.png"
import iconHome from "../../iconos/hogar.png"
import iconCategory from "../../iconos/001-options-lines.png"
import iconHistorial from "../../iconos/001-reloj.png"
import iconCompras from "../../iconos/agregar-carrito.png"



const MenuHamburgueza = () => {

    const [open, setOpen] = useState(false)
    const history = useHistory()


    const handleLoginandRegister=({target})=>{
        const value =target.innerText
        if(value ==="Ingresar"){
            history.push("/login")
            setOpen(false)
        }else{
            history.push("/register")
            setOpen(false)
        }
    }


    return (
        <>
           
            <div className="main-menu-hamburgueza" onClick={() => setOpen(!open)}>
                <span className={open ? "rotate1" : "origin1"} />
                <span className={open ? "rotate2" : "origin2"} />
                <span className={open ? "rotate3" : "origin3"} />
            </div>
            <div className="cardHamburgueza">
                <img src={shopping} alt=""></img>
            </div>

            <ul className={`${open ? "main-link-open " : "main-link-close "}main-link`}>
                <li>
                    <h3>Bienvenido</h3>
                    <img src={iconUser} alt="iconUser" />
                </li>
                <li>
                     <button onClick={handleLoginandRegister}>Ingresar</button>
                    <button onClick={handleLoginandRegister}>Crea Tu Cuenta</button>
                </li>
                <li> <Link to="/"> <img src={iconHome} alt="iconHome" /> Inicio  </Link> </li>
                <li> <Link to="/category/"> <img src={iconCategory} alt="iconCategory" /> Categorias </Link> </li>
                <li> <Link to="/ofretas"> <img src={iconOferta} alt="iconOferta" /> Ofertas </Link> </li>
                <li>  <Link to="/historal"> <img src={iconHistorial} alt="iconHistorial" /> Historial </Link> </li>
                <li>  <Link to="/mis_Compras"> <img src={iconCompras} alt="iconCompras" /> Mis Compras </Link> </li>
            </ul>
        </>

    )
}

export default MenuHamburgueza
