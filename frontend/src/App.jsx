import Navbar from "./components/Navbar.jsx"
import {Routes,Route} from "react-router-dom"

import HomePage from "./pages/HomePage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import SettingsPage from "./pages/SettingsPage.jsx"
import SignUpPage from "./pages/SignUpPage.jsx"
import ProfilePage from "./pages/ProfilePage.jsx"


export default function App() {
  return (
    <>
      <Navbar/>

      <Routes>
       <Route path="/" element = {<HomePage/>}/>  
       <Route path="/settings" element = {<SettingsPage/>}/>  
       <Route path="/signup" element = {<SignUpPage/>}/>  
       <Route path="/login" element = {<LoginPage/>}/>  
       <Route path="/profile" element = {<ProfilePage/>}/>  
      </Routes>

    </>
  )
}