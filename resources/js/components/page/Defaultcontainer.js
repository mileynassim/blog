import React from 'react'
import Login from "../navbar/Login"
import Register from "../navbar/Register"
import Navbar from '../navbar/Navbar'
import { Route } from "react-router-dom";

const Defaultcontainer = () => (
    <div>
        <Navbar />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
    </div>
)
export default Defaultcontainer


