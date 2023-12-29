import React from 'react';

function NavBarTwo(){
    return(
        <nav class="navbar bg-light">
        <div class="container-fluid d-flex">
        <a class="navbar-brand ms-5 " href='/dashboard'>QBIT</a>
        <div class="d-flex">
            <a class="nav-link p-2  me-5 " href="joinQuiz">Join Quiz</a>
            <a class="nav-link p-2  me-5 " href="/dashboard">Dashboard</a>
            <a class="nav-link p-2  me-5 " href="/account">Account</a>
            <a class="nav-link p-2  me-5 " href="/">Logout</a>
        </div>
    </div>
</nav>
    )
}

export default NavBarTwo;



