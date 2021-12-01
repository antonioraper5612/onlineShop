import React from 'react'

import "../showimg/showimg.style.css"

const Showitemimg = ({img,handleimg}) => {
   
    return (
        <>
        <div className="main-show-item-img">
        {img && img.length > 0 && img.map((imagenes,index)=>(
           <div className="img-container" key={index} onClick={()=>handleimg(index)}>
               <img src={`https://dbecommer.herokuapp.com${imagenes.url}`} alt="Img" />
           </div> 
            ))}
        </div>
        </>
    )
}

export default Showitemimg
