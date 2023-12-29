import React from 'react';
import NavBar from './NavBarOne';

function Home (){
    return(
    <div>
    <NavBar />
    <div class="container text-center mt-5">
    <h1>QBIT</h1>
    <div class="d-flex justify-content-center align-items-center custom-margin-top">
        <form>
            <div class="mb-5 form-outline">
                <input type="text" class="form-control form-control-lg" placeholder="Name"/>
            </div>
            <div class="mb-5">
                <input type="text" class="form-control form-control-lg" placeholder="OTP"/>
            </div>
            <button type="button" class="btn btn-dark btn-lg px-5 ">Enter</button>
        </form>
    </div>
</div>
</div>
    )
}

export default Home;