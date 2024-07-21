import React from 'react'
import { BrowserRouter, Link, Router, Routes, Route} from 'react-router-dom'

import Profile from './Profile';
import Login from './Login'
import Signup from './Signup'
import CreateQuotes from './CreateQuotes';
import Home from './Home';
import Navhead from './Navbar';
import OtherProfile from './OtherProfile';
import Page404 from './Page404';
import Protector from './Protector';



export default function Routings() {
  return (
    <div>
      <BrowserRouter>
<Navhead></Navhead>
<Routes>
  <Route path='/profile'element={ <Protector Cmp={Profile}></Protector>} >
 
 </Route>

  <Route path='/login' element={<Login></Login>}>
</Route>
  <Route path='/signup' element={<Signup></Signup>}></Route>
  <Route path='/create'  element={<Protector Cmp={CreateQuotes}></Protector>}> </Route>
  <Route path='/' element={<Home></Home>}></Route>
  <Route path='/otherprofile/:userid' element={<OtherProfile></OtherProfile>} > </Route>
  <Route path='*' element={<Page404></Page404>}></Route>
</Routes>
</BrowserRouter>
    </div>
  )
}
