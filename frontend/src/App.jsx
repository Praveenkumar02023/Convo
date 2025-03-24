import Navbar from "./components/Navbar.jsx"
import {Routes,Route} from "react-router-dom"

import HomePage from "./pages/HomePage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import SettingsPage from "./pages/SettingsPage.jsx"
import SignUpPage from "./pages/SignUpPage.jsx"
import ProfilePage from "./pages/ProfilePage.jsx"
import { useAuthStore } from "./store/useAuthStore.js"
import { useEffect } from "react"
import {Home, Loader} from "lucide-react"
import { Toaster } from "react-hot-toast"

export default function App() {

  const {authUser , checkAuth , isCheckingAuth} = useAuthStore();

  useEffect(()=>{
    checkAuth();
  },[checkAuth]);

  console.log({authUser}); 


  if(!authUser && isCheckingAuth ){

    return (
      <div className="flex items-center justify-center h-screen">
      <Loader className = "size-10 animate-spin"/>
    </div>
    )

  }
  return (
    <>
      <Navbar/>

      <Routes>
       <Route path="/" element = {authUser ? <HomePage/> : <LoginPage/>}/>  
       <Route path="/settings" element = {<SettingsPage/>}/>  
       <Route path="/signup" element = {!authUser ? <SignUpPage/> : <HomePage/>}/>  
       <Route path="/login" element = {!authUser ? <LoginPage/> : <HomePage/>}/>  
       <Route path="/profile" element = {authUser ? <ProfilePage/> : <LoginPage/>}/>  
      </Routes>

      <Toaster/>
    </>
  )
}