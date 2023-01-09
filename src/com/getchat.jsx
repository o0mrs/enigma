import {React} from 'react';
import { useEffect } from 'react';
import NavBar from '../navbar';
import {db} from '../firebase'
import '../App.css'
import { getFirestore } from "firebase/firestore"; 
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }

const GetChat = ()=>{
    let navigate = useNavigate();

//     useEffect(async()=>{
//         // const db = getFirestore(app);
//         const docRef = doc(db, "msgs", "egdF4lqYa1fke4qh0Apy");
//         const docSnap = await getDoc(docRef);
        
//         if (docSnap.exists()) {
//           console.log("Document data:", docSnap.data());
//         } else {
//           // doc.data() will be undefined in this case
//           console.log("No such document!");
//         }
        
//     // const cityRef = db.collection('msgs')
// // const doc = await cityRef.get();
// // if (!doc.exists) {
// //   console.log('No such document!');
// // } else {
// //   console.log('Document data:', doc.data());
// // }
// },[])
    return(
<>
<div className="max-w-[100vw] bga h-[96rem] ">
<NavBar />
<div className="grid place-items-center ">
    <div className="text-4xl  w-[90vw] mt-5 roboto">
        I want to....
    </div>
    <div className="mt-5 w-[90vw] sm:grid lg:block sm:place-items-center  cursor-pointer">
<div onClick={()=>{navigate('/go/send',{replace:false})}} className="lg:w-[45%] sm:w-[90vw] sm:max-w-[30rem] lg:max-w-[50rem] h-60 bg-gradient-to-r roboto text-4xl text-center cursor-pointer pt-24 font-bold  from-[#024e49] to-[#04322f] mt-5 rounded-xl">
Send
</div>
<div onClick={()=>{navigate('/go/res',{replace:false})}} className="lg:w-[45%] sm:w-[90vw] sm:max-w-[30rem] lg:max-w-[50rem] sm:mt-5 lg:float-right lg:-mt-60 h-60 bg-gradient-to-r roboto text-4xl text-center cursor-pointer pt-24 font-bold  from-[#0f103c] to-[#1d1e57] rounded-xl">
Receive
</div>
{/* <div className="w-[45%] h-60 bg-gradient-to-r roboto text-4xl text-center cursor-pointer pt-12 font-bold from-[#2e3088] to-[#363795] mt-5 rounded-xl">
Read
</div> */}
    </div>
</div>
</div>

</>
    )
}
export default GetChat