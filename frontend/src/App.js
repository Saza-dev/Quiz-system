import './App.css';
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import SignIn from './Components/SignIn';
import Dashboard from './Components/dashboard';
import { BrowserRouter,Routes,Route }  from 'react-router-dom';



function App() {
return(
    <BrowserRouter>
      <div>
        <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/signUp" exact Component={SignUp} />
        <Route path="/signIn" exact Component={SignIn} />
        <Route path="/dashboard" exact Component={Dashboard} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
