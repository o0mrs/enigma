import { Logouta,Signupa,auth } from "./firebase";
import { useState,useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const NavBar = ()=>{
  const [a, seta] = useState(1);
  const [pfp, setpfp] = useState('./logo.png')
  let navigate = useNavigate();
    return(
      <div className="navbar text-white">
  <div className="navbar-start">
    <div className="dropdown  text-white">
    <label tabIndex={0} className="btn btn-ghost btn-circle">
    <i class="fa-solid fa-bars-staggered text-xl"></i>      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52">
        <li onClick={()=>{navigate('/',{replace:false})}}><a>Homepage</a></li>
        <li onClick={()=>{navigate('/',{replace:false})}}><a>About</a></li>
        <li onClick={()=>{navigate('/',{replace:false})}}><a>Projects</a></li>
        <li onClick={()=>{navigate('/',{replace:false})}}><a>contact</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <a onClick={()=>{navigate('/go',{replace:false})}} className="btn btn-ghost text-white b normal-case text-2xl">Enigma</a>
  </div>
  <div className="navbar-end">
 
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
      <img className="rounded-full h-8 w-8" src={'/main.png'}></img>

      </div>
    </button>
  </div>
</div>

    )
}
export default NavBar;