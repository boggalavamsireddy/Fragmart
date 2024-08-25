import React from 'react'
import LoadingData from './componets/assets/LoadingData'

import './App.css'
import {  Route, Routes } from 'react-router-dom'
import MenPage from './componets/assets/MenPage'
import WomanPage from './componets/assets/WomanPage'
import KitchanPage from './componets/assets/KitchanPage'
import TvPage from './componets/assets/TvPage'
import WatchPage from './componets/assets/WatchPage'
import FurniturePage from './componets/assets/FurniturePage'
import Mobiles from './componets/loginsigup/Mobiles'
import PageMobile from './componets/assets/PageMobile'
import MobileWindow from './componets/window/MobileWindow'
import KitchanWindow from './componets/window/KitchanWindow'
import TvWindow from './componets/window/TvWindow'
import UserCart from './componets/useCart/UserCart'
import WomenWindow from './componets/window/WomenWindow'
import FurnitureWindow from './componets/window/FurnitureWindow'
import MenWindow from './componets/window/MenWindow'





function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<LoadingData/>}/>
        <Route path='/Mobile' element={<PageMobile/>}/>
        <Route path='/abc' element={<MenPage/>}/>
        <Route path='/Woman' element={<WomanPage/>}/>
        <Route path='/Kitchan' element={<KitchanPage/>}/>
        <Route path='/Men' element={<MenPage/>}/>
        <Route path='/Tv' element={<TvPage/>}/>
        <Route path='/Watch' element={<WatchPage/>}/>
        <Route path='/Furniture' element={<FurniturePage/>}/>
        <Route path='/MobileWindow/:id' element={<MobileWindow/>}/>
        <Route path='/KitchanWindow/:id' element={<KitchanWindow/>}/>
        <Route path='/TvWindow/:id' element={<TvWindow/>}/>
    
        <Route path='/cart' element={<UserCart/>}/>
        <Route path='/WomenWindow/:id' element={<WomenWindow/>}/>
        <Route path='/FurnitureWindow/:id' element={<FurnitureWindow/>}/>
        <Route path='/MenWindow/:id' element={<MenWindow/>}/>

      </Routes>
 
    </div>
  )
}

export default App
