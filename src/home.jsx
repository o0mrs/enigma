import './App.css'
import NavBar from './navbar';
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from 'react';
const Home = ()=>{
let navigate = useNavigate();
// little point 
const [mouseX, setMouseX] = useState(0);
const [mouseY, setMouseY] = useState(0);
const [pointX, setPointX] = useState(0);
const [pointY, setPointY] = useState(0);

useEffect(() => {
  function handleMouseMove(event) {
    setMouseX(event.clientX + window.scrollX);
    setMouseY(event.clientY + window.scrollY);
  }
  window.addEventListener('mousemove', handleMouseMove);
  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
  };
}, []);

useEffect(() => {
  const delay = setTimeout(() => {
    setPointX(mouseX);
    setPointY(mouseY);
  }, 300);
  return () => {
    clearTimeout(delay);
  };
}, [mouseX, mouseY]);

// tracking 
const [tab, settab] = useState(0);
const [positions, setpositions] = useState([]);
var m = []
useEffect(() => {
  function handleMouseMove(event) {
    m.push({x:event.pageX ,y:event.pageY})
    console.log(m)
    setpositions(m)
    // console.log([])
    // setMouseX();
    // setMouseY();
  }
  window.addEventListener('mousemove', handleMouseMove);
  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
  };
}, []);




if(tab == 0){
    return(
        <div className="max-w-[100vw] bga h-[96rem] ">
      <div
        style={{
          position: 'absolute',
          left: `${pointX -4}px`,
          top: `${pointY -6}px`,
          width: '10px',
          height: '10px',
          backgroundColor: '#fff',
          borderRadius: '50%'
        }}
      />
        <NavBar />
        <div>
            <div className="flex items-center justify-center text-white sm:mt-16 md:mt-36
            +">
                <div className="sm:max-w-[90vw] md:max-w-[90rem] text-5xl md:text-7xl text-center font-bold roboto">Your messages,<br className=''/> your business</div>
        
            </div>
                    <div className="flex items-center justify-center text-[#8B949E] mt-5 ">
                        <div className="sm:max-w-[90vw] md:max-w-[45rem] roboto text-lg text-center roboto">
                        Use our 256-bit encryption to send secure messages that would take a supercomputer a very long time to decrypt
        
                        </div>
        
                </div>
                <div className="grid place-items-center mt-7">
                <button onClick={()=>{navigate('/go',{replace:false})}} className="btn  hover:shadow-md b border-0 hover:bg-white hover:shadow-[#ffffff6a] btn-md bg-white focus:text-black focus:bg-white outline-0 text-black text btn-lg md:mt-6 roboto" >START</button>
                        </div>
                        <div className="grid place-items-center mt-14 ">
                            <div className="sm:max-w-[91vw] md:max-w-[45rem]">
                            <img alt='product showcase' onClick={()=>{settab(1)}} className="img-responsive rounded-xl" src='/main.png'></img>
        
                            </div>
                        </div>
        </div>
        </div>
            )
}else{
    return(
        <div>
        {positions.map((position, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              left: `${position.x}px`,
              top: `${position.y}px`,
              width: '10px',
              height: '10px',
              backgroundColor: 'red',
              borderRadius: '50%'
            }}
          />
        ))}
      </div>
            )
}



}
export default Home;