
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './Component/Login/login';
import { Profile } from './Component/Profile/profile';
import { Register } from './Component/Register/register';

function App() {
  return (
    <div className="App">
     
     <Routes>
       
       <Route path='' element={<Register></Register>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/profile' element={<Profile></Profile>}></Route>



     </Routes>
   
    </div>
  );
}

export default App;
