import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";



//Importar imagenes
import logo from "../iconos/logo.png";
import card from "../iconos/shopping.png";
import search from "../iconos/search.png";
//import stylos
import 'animate.css';
import "../header/header.style.css"
import "../cssResponsi/Responsi.css"


//Import Contex
import ProductContext from "../../Context/ProductContext"
import AddProductContext from "../../Context/AddProductContext";
import LoginContext from "../../Context/LoginContext";


//firebase
import { getAuth, signOut } from "firebase/auth";


//import componets
import MainDropdown from "../dropdown/MainDropdown"
import MenuHamburgueza from "./menuhamburgueza/MenuHamburgueza";


//iconos

import userProfile from "../iconos/userProfile.png"

export const Header = () => {

  //context AddProductCard
  const { state: AddProduct } = useContext(AddProductContext)
  const { cardShop } = AddProduct

  //Context Product
  const { state: Product, dispatch: dispatchProduct } = useContext(ProductContext)

  //state context product
  const [searchProduct, setsearchProduct] = useState("")

  //state context login
  const { state: statelogin, dispatch: dispatchLogin } = useContext(LoginContext)
  //state
  const [category, setCategory] = useState([])
  const [menuProfile, setMenuProfile] = useState(false)



  //Use Router
  const { pathname } = useLocation()


  useEffect(() => {
    if (searchProduct === "") {
      dispatchProduct({ type: "Search_Product", payload: "" })
    }
  }, [searchProduct, dispatchProduct])


  useEffect(() => {
    const handleCategory = async () => {
      try {
        const API = "https://dbecommer.herokuapp.com/categorias"
        const request = await fetch(API)
        const result = await request.json()
        setCategory(result)
      } catch (error) {
        console.log(error)
      }
    }
    handleCategory()
  }, [])


  const handleSearch = async (e, search) => {
    e.preventDefault()
    if (search !== "") {

      const newCaterogy = category.find((item) => item.name.includes(search.toLowerCase()))
      if (newCaterogy !== undefined) {
        const { productos } = newCaterogy
        dispatchProduct({ type: "Search_Product", payload: productos })
      } else {
        let search_String = search.charAt(0).toUpperCase() + search.slice(1);
        const { product } = Product
        const newProduct = product.filter(item => item.name.includes(search_String))
        console.log(newProduct)
        dispatchProduct({ type: "Search_Product", payload: newProduct })

      }

    }
  }

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
    dispatchLogin({ type: "sigOut_Login", payload: null })

  }

  const handleProfile = () => {
    setMenuProfile(!menuProfile)
  }


  return (
    <>
      <div className="main-header ">
        <form className="form-header" onSubmit={(e) => handleSearch(e, searchProduct)}>
          <div className="main-logo">
            <Link to="/" className="animate__animated animate__rubberBand">
              <img src={logo} alt="Logo"></img>
              Online Shopping</Link>
          </div>
          {pathname === "/" &&
            <div className="main-search">
              <input type="text" onChange={(e) => setsearchProduct(e.target.value)} />
              <button type="submit">
                <img src={search} alt="" />
              </button>
            </div>}

        </form>
        <MenuHamburgueza cardShop={cardShop} />
        <div className="main-content-items ">
          <div className="header-content">
            <ul className="Categorias">
              <li>
                <MainDropdown category={category} />
              </li>
              <li>
                <Link to="/Ofertas">Ofertas</Link>
              </li>
              <li>
                <Link to="/Historial">Historial</Link>
              </li>
            </ul>
          </div>
          <div className="header-content">
            <ul className="login">

              {!statelogin.user && (
                <>
                  <li><Link to="/Register">Crear tu cuenta</Link></li>
                  <li><Link to="/login">Ingresar</Link></li>
                </>
              )}
              <li>
                <Link to="/Miscompras">Mis comprar</Link>
              </li>
              <li>
                <Link to="/card.payments">
                  <img src={card} alt="card" />
                  {cardShop && cardShop.length > 0 &&
                    <div className="logocard">{cardShop.length}</div>}
                </Link>
              </li>
            </ul>
            {statelogin?.user &&
              <div className="main-avatar">
                <img onClick={handleProfile} 
                src={statelogin.user.photoURL ? statelogin?.user?.photoURL : userProfile } alt="profile"></img>
                <div className="main-menu">
                  <ul className={`${menuProfile ? "main-menu-open" : "main-menu-close"}`}>
                    <li>{statelogin.user.displayName ? statelogin.user.displayName : statelogin.user.email  }</li>
                    <li onClick={handleLogout}>Logout</li>
                  </ul>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
