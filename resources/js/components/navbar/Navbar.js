import React from 'react'
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">

                <Link to="/" className="navbar-brand">Blog</Link>
                <div className="right" >
                    <Link to="/login" className="navbar-brand"> Login </Link>
                    <Link to="/register" className="navbar-brand"> Register </Link>

                </div>
            </nav>
        </div>
    )
}

export default Navbar
