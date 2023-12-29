import React from 'react'


function NavBarOne(){
    return(
        <nav className="navbar bg-light">
        <div className="container-fluid d-flex">
        <a className="navbar-brand ms-5" href='/'>QBIT</a>
        <div className="d-flex">
        <a className="nav-link p-2  me-5 " href="/">Home</a>
            <a className="nav-link p-2  me-5 " href="/signIn">Sign in</a>
            <a className="nav-link p-2  me-5 " href="/signUp">Sign Up</a>
        </div>
        </div>
        </nav>
    )
}

export default NavBarOne;
