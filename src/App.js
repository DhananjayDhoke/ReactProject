
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Component/Home/home';
import { Login } from './Component/Login/login';
import { Nabar } from './Component/Navbar/navbar';
import { Privateroute } from './Component/PrivateRoute/privateroute';
import { Profile } from './Component/Profile/profile';
import { Register } from './Component/Register/register';

function App() {
  return (
    <div className="App">
     <Nabar></Nabar>
     <Routes>
     
       
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/register' element={<Register></Register>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
      
       <Route path='/user' element={<Privateroute/>}>
          
      
       <Route path='profile' element={<Profile></Profile>}></Route>

       </Route>
        

     </Routes>
   
    </div>
  );
}

export default App;
