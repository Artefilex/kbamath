import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword  ,signOut} from "firebase/auth"
import { toast } from "react-hot-toast";
const firebaseConfig = {
  apiKey:import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket:import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId:import.meta.env.VITE_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID
};




const app = initializeApp(firebaseConfig);

const auth = getAuth();

export const register = async (email ,password) => {
 try {
    const { user } = await  createUserWithEmailAndPassword(auth ,email , password)
    return user
 }
 catch(error){
    toast.error(error.message)
 }
    
}

export const login = async (email , password) =>{
    try {
        const { user } = await  signInWithEmailAndPassword (auth ,email , password)
        return user
     }
     catch(error){
        toast.error(error.message)
     }
        
}

export const logout = async () =>{
    try {
        await  signOut(auth )
     }
     catch(error){
        toast.error(error.message)
     }
}


export default app 