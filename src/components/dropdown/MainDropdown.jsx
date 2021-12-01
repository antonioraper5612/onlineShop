import React from "react";

import {Dropdown} from "react-bootstrap"

import { useHistory } from "react-router";

import "../dropdown/dropdown.style.css"



const MainDropdown = ({category}) => {
  
  const history=useHistory()
  
  const handleSelect=(e)=>{
    history.push(`/category/${e}`)
  }
    return (
      <>
      <Dropdown onSelect={handleSelect}>
          <Dropdown.Toggle 
          id="dropdown-button" 
            >
            Categoria
          </Dropdown.Toggle>
          <Dropdown.Menu variant="dark ">
          <Dropdown.Item   eventKey="all">All</Dropdown.Item>
            {category?.map(item=> <Dropdown.Item  key={item.id} eventKey={item.name}>{item.name}</Dropdown.Item> )}
          </Dropdown.Menu>
         
      </Dropdown>

      </>
    )
}

export default MainDropdown
