import './App.css'
import NavBar from './navbar';
import { useNavigate } from "react-router-dom";
const Home = ()=>{
let navigate = useNavigate();

    return(
<div className="max-w-[100vw] bga h-[96rem] ">

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
                    <img alt='product showcase' className="img-responsive rounded-xl" src='/main.png'></img>

                    </div>
                </div>
</div>
</div>
    )
}
export default Home;