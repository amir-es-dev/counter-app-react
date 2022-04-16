import React from "react";
import  "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <h1>Header</h1>
            <button className="loginBtn">Login</button>
            <button className="logoutBtn">Logout</button>
        </div>
    )
}

export default Header;