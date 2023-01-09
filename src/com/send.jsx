import {React} from 'react';
import { useEffect,useState } from 'react';
import NavBar from '../navbar';
import '../App.css'
import CryptoJS from 'crypto-js';
import {db} from '../firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {collection, addDoc,doc,setDoc, getDoc } from "firebase/firestore";
function encrypt(msg, secret) {
  const ciphertext = CryptoJS.AES.encrypt(msg, secret);
  return ciphertext.toString();
}

function decrypt(encrypted, secret) {
  const bytes = CryptoJS.AES.decrypt(encrypted, secret);
  return bytes.toString(CryptoJS.enc.Utf8);
}


const Sendit = ()=>{
    const [name, setname] = useState('')
    const [msg, setmsg] = useState('')
    const [key, setkey] = useState('')
    const [tab, settab] = useState(0)
    const [id, setid] = useState('')
    const send =async (name,msg,key)=>{
        settab(1)
        let something = encrypt(msg,key)
        const docRef = await addDoc(collection(db, "msgs"), {
            name: name,
            msg: something
          });
          setid(docRef.id)
          settab(2)
          console.log("Document written with ID: ", docRef.id);
    }
    useEffect(()=>{
        
        // send()
    },[])
    if(tab == 0){
        return(
<>
<div className="max-w-[100vw] bga h-[96rem] ">
<NavBar />
<div className=''>
<ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
class="mt-5 max-w-[80vw]"
/>
      </div>
<div className="grid place-items-center  ">
<div className="text-4xl text-accent  w-[90vw] mt-7 roboto">
        Send mode
    </div>
    </div>
<div className="grid place-items-center  ">
    <div className="text-xl  w-[90vw] mt-7 roboto">
        What's your nickname?
    </div>
        <input onChange={(e)=>{setname(e.target.value)}} className='input bg-base-300 w-[90vw] mt-3' placeholder='lukes, joe, alive'></input>
        <div className="text-xl  w-[90vw] mt-7 roboto">
        What do u wanna tell?
    </div>
        <textarea onChange={(e)=>{setmsg(e.target.value)}} className='input bg-base-300 w-[90vw] mt-3 min-h-[7rem] pt-3' placeholder="I secretly hacked into the government's files and find out what really happened on the moon landing."></textarea>
        <div className="text-xl  w-[90vw] mt-7 roboto">
        Unlock phrase?
    </div>
        <input onChange={(e)=>{setkey(e.target.value)}} className='input bg-base-300 w-[90vw] mt-3' placeholder='Abraka dabra'></input>
        <button onClick={()=>{
                console.log(key.length)
            if(key.length < 2){
                console.log()
                toast.warn('🦄 key must be at least 2 characters!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
            
            }else if(name.length < 2){
                toast.warn('🦄 name must be at least 2 characters!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
            
            }else if(msg.length < 2){
                toast.warn('🦄 msg must be at least 2 characters!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
            
            }else{
                send(name,msg,key)
            }
        }} className='btn btn-active btn-accent mt-5' >SEND</button>
</div>
<div>

</div>
</div>

</>
    )
    }else if (tab == 1){
        return(
            <>
            <div className="max-w-[100vw] bga h-[96rem] ">
<NavBar />
<div className="grid place-items-center mt-52">


<div class="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
</div>
</div></>
        )
    }else if (tab == 2){
        return(
            <>
            <div className="max-w-[100vw] bga h-[96rem] ">
<NavBar />
<div className=" mt-12">

<div className="roboto">
<div className="text-accent text-4xl text-center">
    Sent!
</div>
<div className="px-12 mt-5 text-xl">
id: {id}
<br />
name: {name}
<br />
key: {key}
</div>
</div>
</div>
</div></>
        )
    }

}
export default Sendit