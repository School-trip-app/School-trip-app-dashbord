import './App.css';
import Main from './components/Main';
import Nav from './components/Nav';
import { useState, useEffect} from 'react';
import Login from './components/Login';
import cookies from 'react-cookies';
function App() {
  const [login , setLogin] = useState(true);
  useEffect(()=>{
   if(cookies.load('token')){
    setLogin(true);
   }
  },[])
  return (
  <div className={login?"App-flex":"App"}>
    {login&&
      <>
     <Nav setLogin={setLogin}/>
     <Main/>
     </>
     }
      {!login&&<Login setLogin={setLogin}/>}
    </div>
  );
}

export default App;
