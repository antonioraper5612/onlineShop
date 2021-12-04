import React, { useEffect,useContext } from "react";



// import CarouselImg from "../views/CarouselImg";
// import Cards from "../views/Cards";
// import Ofertas from "../Home/Ofertas";

import "../home/Home.style.css";

//import Context
 import ProductContext from "../../Context/ProductContext";

//Importar componets
import Carousel from "../viuws/carousel/Carousel"
import Cards from "../viuws/card/Cards"

const Home = () => {
  const {dispatch} = useContext(ProductContext)
 



  useEffect(() => {
    const handleProduct = async()=>{
      const API="https://dbecommer.herokuapp.com/Productos"
      const request = await fetch(API)
      const result = await request.json()
      dispatch({type:"Product_All" , payload:result})
    }
    handleProduct()
  }, [dispatch]);

  return (
    <>
    <div className="container-Carousel">
    <Carousel />
    </div>
      <div className="main-cards ">
        <Cards />
      </div>
    </>
  );
};

export default Home;
