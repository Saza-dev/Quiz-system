import React from 'react'
import NavBarTwo from './NavBarTwo'

function Dashboard (){
    return (
        <div>
            <NavBarTwo />

<div class="container">
    <br/>
    <br/>
    <h2>Welcome Sasanka!</h2>
    <br/>
    <br/>
    <br/>

<h3>Your recent Attempts</h3>
<br/>


<table class="table table-hover">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Quiz Name</th>
        <th scope="col">Marks</th>
        <th scope="col">Module Name</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Quiz 1</td>
        <td>85%</td>
        <td>Maths</td>
        <td><button class="btn btn-success">View quiz</button></td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Quiz 2</td>
        <td>50%</td>
        <td>Programming Fundementals</td>
        <td><button class="btn btn-success">View quiz</button></td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Quiz 3</td>
        <td>92%</td>
        <td>Maths</td>
        <td><button class="btn btn-success">View quiz</button></td>
      </tr>
      <tr>
        <th scope="row">4</th>
        <td>Quiz 4</td>
        <td>65%</td>
        <td>English</td>
        <td><button class="btn btn-success">View quiz</button></td>
      </tr>
      <tr>
        <th scope="row">5</th>
        <td>Quiz 5</td>
        <td>70%</td>
        <td>Algorithms</td>
        <td><button class="btn btn-success">View quiz</button></td>
      </tr>
      <tr>
        <th scope="row">6</th>
        <td>Quiz 6</td>
        <td>94%</td>
        <td>System Design</td>
        <td><button class="btn btn-success">View quiz</button></td>
      </tr>
    </tbody>
  </table>

</div>










            

        </div>
    )
}


export default Dashboard;