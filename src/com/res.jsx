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


const Res = ()=>{
    const [name, setname] = useState('')
    const [msg, setmsg] = useState('')
    const [key, setkey] = useState('')
    const [tab, settab] = useState(0)
    const [id, setid] = useState('')
    const send =async (name,msg,key)=>{
        settab(1)
        //     useEffect(async()=>{
            
        const docRef = doc(db, "msgs", msg);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data().msg);
          let a = decrypt(docSnap.data().msg,key)
          setid(a)
          setname(docSnap.data().name)
          settab(2)
        } else {
          // doc.data() will be undefined in this case
          settab(0)
          toast.warn('🦄 No such document!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
          console.log("No such document!");
        }
        
//     // const cityRef = db.collection('msgs')
// // const doc = await cityRef.get();
// // if (!doc.exists) {
// //   console.log('No such document!');
// // } else {
// //   console.log('Document data:', doc.data());
// // }
// },[])

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
Receive mode
    </div>
    </div>
<div className="grid place-items-center  ">
    {/* <div className="text-xl  w-[90vw] mt-7 roboto">
        What's the nickname?
    </div> */}
        {/* <input onChange={(e)=>{setname(e.target.value)}} className='input bg-base-300 w-[90vw] mt-3' placeholder='lukes, joe, alive'></input> */}
        <div className="text-xl  w-[90vw] mt-7 roboto">
        what's the id
    </div>
        <input onChange={(e)=>{setmsg(e.target.value)}} className='input bg-base-300 w-[90vw] mt-3' placeholder="djnioo329033298dh"></input>
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
        }} className='btn btn-active btn-accent mt-5' >SEARCH</button>
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
    Found it!
</div>
<div className="px-12 mt-5 text-xl">
By: {name}
<br />
{id}
</div>
</div>
</div>
</div></>
        )
    }

}
export default Res