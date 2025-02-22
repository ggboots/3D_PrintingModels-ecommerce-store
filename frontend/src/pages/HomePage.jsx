import React from "react"
import { Link } from "react-router-dom"

import Navbar from "../components/Navbar"

function HomePage(){
    return(
        <div>
            <Navbar/>
            <div className="main-container">
            <Link to="/ProductPage">
            <button>Product Page</button>
            </Link>
            </div>
            <div className="card">
                <p>
                    <Link to="/">
                        Developed by <code>Grahm</code> 🛠️
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default HomePage