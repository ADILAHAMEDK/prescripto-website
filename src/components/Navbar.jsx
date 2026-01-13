import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState(location.pathname);
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

   useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
        <img onClick={()=>navigate("/")} className='w-44 cursor-pointer' src={assets.logo} alt="" />
        <ul className='hidden md:flex items-start gap-5 font-medium'>
            <NavLink to="/" onClick={()=>setActive("/")}>
                <li className='py-1'>HOME</li>
                <hr className={`border-none outline-none h-0.5 bg-(--primary) w-3/5 m-auto ${active === "/" ? "block" : "hidden"} `} />
            </NavLink>
              <NavLink to="/doctors" onClick={()=>setActive("/doctors")} >
                <li className='py-1'>ALL DOCTORS</li>
                <hr className={`border-none outline-none h-0.5 bg-(--primary) w-3/5 m-auto ${active === "/doctors" ? "block" : "hidden"}`} />
            </NavLink>
              <NavLink to="/about" onClick={()=>setActive("/about")}  >
                <li className='py-1'>ABOUT</li>
                <hr className={`border-none outline-none h-0.5 bg-(--primary) w-3/5 m-auto ${active === "/about" ? "block" : "hidden"}`} />
            </NavLink>
              <NavLink to="/contact" onClick={()=>setActive("/contact")}>
                <li className='py-1'>CONTACT</li>
                <hr className={`border-none outline-none h-0.5 bg-(--primary) w-3/5 m-auto ${active === "/contact" ? "block" : "hidden"}`} />
            </NavLink>
        </ul>
        <div className='flex items-center gap-4'>
            {token ? 
            <div className='flex items-center gap-2 cursor-pointer group relative'>
                <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
                <img className='w-2.5' src={assets.dropdown_icon} alt="" />
                <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                    <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                        <p onClick={()=> navigate("/my-profile")} className='hover:text-black cursor-pointer'>My Profile</p>
                        <p onClick={()=> navigate("/my-appointments")} className='hover:text-black cursor-pointer'>My Appointments</p>
                        <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                    </div>
                </div>
            </div>
            : <button onClick={()=>navigate("/login")} className='bg-(--primary) text-white px-8 py-3 rounded-full font-light hidden md:block'>Create account</button>
        }
            
        </div>

    </div>
  )
}

export default Navbar