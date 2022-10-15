import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Login from './components/login/login';

function App({youtube, authService}) {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/react-youtube/' element={<Login authService={authService}/>}/>
      <Route path='/react-youtube/home' element={<Home authService={authService} youtube={youtube}/>}/>
    </Routes>
   </BrowserRouter>
  )
   ;
}

export default App;
