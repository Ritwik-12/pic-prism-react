import {Routes,Route, useLocation} from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import { Signup } from '../Pages/Signup'
import SellerDashboard from '../Pages/SellerDashboard'
import BuyerDashboard from '../Pages/BuyerDashboard'
import gsap from "gsap"
import { useRef } from 'react'
import { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const GsapTransition = () => {

    const nodeRef=useRef(null)
    const location=useLocation()

    //when page renders useEffect run first

    useEffect(()=>{
        if(nodeRef.current){
            gsap.fromTo(nodeRef.current,{opacity:0},{opacity:1,duration:1});
            toast.success("page changed")
        }
    },[location])

  return (
    <div ref={nodeRef}>
        <Toaster/>
         <Routes location={location}>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/seller/profile" element={<SellerDashboard/>}/>
            <Route path="buyer/profile" element={<BuyerDashboard/>} />
          </Routes>
    </div>
  )
}

export default GsapTransition