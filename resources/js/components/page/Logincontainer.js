import React from 'react'
import User from '../user/User'
import { Route } from "react-router-dom";




const Logincontainer = () => (

    <Route path="/user/:id" component={User} />

)

export default Logincontainer