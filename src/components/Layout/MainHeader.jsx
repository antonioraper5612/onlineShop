import React from 'react'




//import Components
import Header from "../header/Header"




const MainHeader = ({children}) => {
    return (
        <>
        <Header/>
        {children}
        </>
    )
}

export default MainHeader
