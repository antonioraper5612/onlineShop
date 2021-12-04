import React from 'react'

import {Alert} from "react-bootstrap"

const MainAlerts = ({message}) => {
    return (
        <Alert  variant={"danger"}>
     { message}
  </Alert>
    )
}

export default MainAlerts
